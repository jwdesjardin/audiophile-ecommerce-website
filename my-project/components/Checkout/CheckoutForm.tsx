import React, { ReactNode } from 'react'
import RadioGroup from '../RadioInput'
import TextInput from '../TextInput'
import { Formik } from 'formik'

export const CheckoutForm = () => {
	return (
		<section className='content-container p-6 bg-white-100 rounded-lg mb-8'>
			<h2 className='h4 mb-8'>Checkout</h2>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
					address: '',
					zip: '',
					city: '',
					country: '',
					payment_method: '',
					emoney_number: '',
					emoney_pin: '',
				}}
				validate={(values) => {
					const errors: { name?: string; email?: string; phone?: string } = {}
					if (!values.name) {
						errors.name = '* Required'
					} else if (!values.email) {
						errors.email = '* Required'
					} else if (!values.phone) {
						errors.phone = '* Required'
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = '* Invalid email address'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log('submit')
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2))
						setSubmitting(false)
					}, 400)
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => {
					const FormikInput = ({
						label,
						id,
						placeholder,
					}: {
						label: string
						id: string
						placeholder: string
					}) => {
						return (
							<TextInput
								className='mb-6'
								label={label}
								id={id}
								placeholder={placeholder}
								formik={{
									error: errors[id],
									value: values[id],
									touched: touched[id],
									handleBlur,
									handleChange,
								}}
							></TextInput>
						)
					}
					return (
						<form action='' onSubmit={handleSubmit}>
							<div className='pb-2'>
								<h4 className='subtitle text-orange-600 mb-4'>Billing Details</h4>
								<div className='md:grid md:grid-cols-2'>
									<TextInput
										className='mb-6'
										label='Name'
										id='name'
										placeholder='Alexei Ward'
										formik={{
											error: errors.name,
											value: values.name,
											touched: touched.name,
											handleBlur,
											handleChange,
										}}
									></TextInput>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.email,
											value: values.email,
											touched: touched.email,
											handleBlur,
											handleChange,
										}}
										label='Email Address'
										id='email'
										type='email'
										placeholder='alexei@gmail.com'
									></TextInput>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.phone,
											value: values.phone,
											touched: touched.phone,
											handleBlur,
											handleChange,
										}}
										label='Phone Number'
										id='phone'
										placeholder='+1 202-555-0136'
									></TextInput>
								</div>
							</div>
							<div className='pb-2'>
								<h4 className='subtitle text-orange-600 mb-4'>Shipping Info</h4>
								<TextInput
									className='mb-6'
									formik={{
										error: errors.address,
										value: values.address,
										touched: touched.address,
										handleBlur,
										handleChange,
									}}
									label='Address'
									id='address'
									placeholder='1137 Williams Avenue'
								></TextInput>

								<div className='md:grid md:grid-cols-2'>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.zip,
											value: values.zip,
											touched: touched.zip,
											handleBlur,
											handleChange,
										}}
										label='ZIP Code'
										id='zip'
										placeholder='10002'
									></TextInput>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.city,
											value: values.city,
											touched: touched.city,
											handleBlur,
											handleChange,
										}}
										label='City'
										id='city'
										placeholder='New York'
									></TextInput>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.country,
											value: values.country,
											touched: touched.country,
											handleBlur,
											handleChange,
										}}
										label='Country'
										id='country'
										placeholder='United States'
									></TextInput>
								</div>
							</div>

							<div className='pb-2'>
								<h4 className='subtitle text-orange-600 mb-4'>Payment Details</h4>
								<RadioGroup
									title='Payment Method'
									values={['e-money', 'cash']}
									controlledState={''}
									setRadio={() => {}}
								></RadioGroup>
								<div>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.emoney_number,
											value: values.emoney_number,
											touched: touched.emoney_number,
											handleBlur,
											handleChange,
										}}
										label='e-moneyNumber'
										id='emoney_number'
										placeholder='1234568911'
									></TextInput>
									<TextInput
										className='mb-6'
										formik={{
											error: errors.emoney_pin,
											value: values.emoney_pin,
											touched: touched.emoney_pin,
											handleBlur,
											handleChange,
										}}
										label='e-moneyPin'
										id='emoney_pin'
										placeholder='1234'
									></TextInput>
								</div>
							</div>
							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
						</form>
					)
				}}
			</Formik>
		</section>
	)
}
