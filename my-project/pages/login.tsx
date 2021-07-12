import axios from 'axios'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FormikTextInput } from '../components/Checkout/FormikForm'

import Layout from '../components/Layout'
import { UserCTX } from '../context'

const login = () => {
	const router = useRouter()
	const { setActiveUser, toggleUserMenuVisible } = React.useContext(UserCTX)
	const [pageError, setPageError] = React.useState<string | null>(null)
	const [formLoading, setFormLoading] = React.useState(false)
	return (
		<Layout goBackButton>
			<div className='content-container flex justify-center'>
				<div className='mb-[160px] '>
					<h2 className='h2 text-center mb-6'>Login</h2>
					{pageError && (
						<div className=' absolute top-20 left-1/2 transform -translate-x-1/2 flex-shrink-0 rounded-lg border-red-600 bg-red-600  p-4'>
							<p className='text-white-200 text-center subtitle mb-4'>{pageError}</p>
						</div>
					)}
					<Formik
						initialValues={{
							email: '',
							password: '',
						}}
						validate={(values) => {
							const errors: Partial<typeof values> = {}

							if (!values.email) {
								errors.email = 'Required'
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Invalid email address'
							} else if (!values.password) {
								errors.password = 'Required'
							} else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
								errors.password = 'Invalid Password'
							}

							return errors
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								;(async () => {
									setFormLoading(true)
									try {
										const config = { headers: { 'Content-type': 'application/json' } }
										const res = await axios.post(
											'https://audiophile-users.herokuapp.com/users/login',
											values,
											config
										)
										// const res = await axios.post(
										// 	'http://localhost:5000/users/login',
										// 	values,
										// 	config
										// )
										if (res.status === 200) {
											// saves user data to context
											const user = res.data
											const newUser = {
												_id: user._id,
												name: user.name,
												email: user.email,
												isAdmin: user.isAdmin,
											}
											setActiveUser(newUser)
											localStorage.setItem('activeUser', JSON.stringify(newUser))
											router.push('/')
											toggleUserMenuVisible(true)
										}
									} catch (e) {
										setPageError('Invalid credentials. Please try again.')
										setTimeout(() => {
											setPageError(null)
										}, 4000)
									}
									setFormLoading(false)
									setSubmitting(false)
								})()
							}, 400)
						}}
					>
						{({
							errors,
							touched,
							handleSubmit,
							isSubmitting,
							/* and other goodies */
						}) => {
							return (
								<Form onSubmit={handleSubmit} id='login'>
									<div className='flex flex-col items-center'>
										<div className='flex flex-col mb-6'>
											<FormikTextInput
												showError={errors.email && touched.email}
												label='Email'
												id='email'
												placeholder='alexei@gmail.com'
												type='email'
												fullWidth
											/>
											<FormikTextInput
												showError={errors.password && touched.password}
												label='Password'
												id='password'
												placeholder='test123'
												fullWidth
											/>
										</div>
										{formLoading ? (
											<p className='py-6'>Loading...</p>
										) : (
											<button className='button-one mb-6' disabled={isSubmitting} type='submit'>
												Login
											</button>
										)}

										<p className='to-black-400 text-center'>
											dont have an account?{' '}
											<Link href='/register'>
												<a className='underline'> please register</a>
											</Link>
										</p>
									</div>
								</Form>
							)
						}}
					</Formik>
				</div>
			</div>
		</Layout>
	)
}

export default login
