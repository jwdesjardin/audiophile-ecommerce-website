import { Form, Formik } from 'formik'
import React from 'react'
import { FormikTextInput } from '../components/Checkout/FormikForm'

import Layout from '../components/Layout'

const register = () => {
	return (
		<Layout goBackButton>
			<div className='content-container flex justify-center'>
				<div className='mb-[200px] '>
					<h2 className='h2 text-center mb-6'>Register</h2>
					<Formik
						initialValues={{
							name: '',
							email: '',
							password: '',
						}}
						validate={(values) => {
							const errors: Partial<typeof values> = {}

							if (!values.name) {
								errors.name = 'Required'
							} else if (!values.email) {
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
							console.log('values captured')

							setTimeout(() => {
								alert(JSON.stringify(values, null, 2))
								setSubmitting(false)
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
								<Form onSubmit={handleSubmit} id='user-info'>
									<div className='flex flex-col items-center'>
										<div className='flex flex-col mb-6'>
											<FormikTextInput
												showError={errors.name && touched.name}
												label='Name'
												id='name'
												placeholder='Alexei Ward'
												fullWidth
											/>
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

										<button className='button-one' disabled={isSubmitting} type='submit'>
											Register
										</button>
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

export default register
