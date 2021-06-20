import React, { ReactNode } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { CTX } from '../../context'

export const FormikForm = () => {
	const { cart } = React.useContext(CTX)
	const cartTotal = cart.reduce((a, c) => a + c.item.price * c.qty, 0)
	const cartVAT = cartTotal * 0.2
	const cartItems = cart.reduce(
		(a, c) => [
			...a,
			{ name: c.item.name, price: c.item.price, quantity: c.qty, sku: c.item.slug.current },
		],
		[]
	)
	const grandTotal = cartTotal + cartVAT + 50

	return (
		<section className='px-6 lg:px-12  pt-6 md:pt-8 lg:pt-14 bg-white-100 rounded-lg mb-8'>
			<h2 className='h4 lg:h3 mb-8 lg:mb-10'>Checkout</h2>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
					address: '',
					zip: '',
					city: '',
					country: '',
					payment_method: 'emoney',
					emoney_number: '',
					emoney_pin: '',
				}}
				validate={(values) => {
					const errors: Partial<typeof values> = {}
					if (!values.name) {
						errors.name = '* Required'
					} else if (!values.email) {
						errors.email = '* Required'
					} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
						errors.email = '* Invalid email address'
					} else if (!values.phone) {
						errors.phone = '* Required'
					} else if (!/^\d+$/i.test(values.phone)) {
						errors.phone = '* Phone # must only include numbers'
					} else if (!values.address) {
						errors.address = '* Required'
					} else if (!values.zip) {
						errors.zip = '* Required'
					} else if (!/^\d+$/i.test(values.zip)) {
						errors.zip = '* Zip must only include numbers'
					} else if (!values.city) {
						errors.city = '* Required'
					} else if (!values.country) {
						errors.country = '* Required'
					} else if (!values.emoney_number && values.payment_method === 'emoney') {
						errors.emoney_number = '* Required'
					} else if (!/^\d+$/i.test(values.emoney_number) && values.payment_method === 'emoney') {
						errors.emoney_number = '* # must only include numbers'
					} else if (!values.emoney_pin && values.payment_method === 'emoney') {
						errors.emoney_pin = '* Required'
					} else if (!/^\d+$/i.test(values.emoney_pin) && values.payment_method === 'emoney') {
						errors.emoney_pin = '* PIN must only include numbers'
					}
					return errors
				}}
				onSubmit={(values, { setSubmitting }) => {
					console.log('submit')
					setTimeout(() => {
						alert(
							JSON.stringify(
								{ grandTotal, cartTotal, cartVAT, cartItems, customer_info: { ...values } },
								null,
								2
							)
						)
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
					return (
						<Form onSubmit={handleSubmit} id='user-info'>
							<FormSection title='Billing Details'>
								<FormikTextInput
									showError={errors.name && touched.name}
									label='Name'
									id='name'
									placeholder='Alexei Ward'
								/>
								<FormikTextInput
									showError={errors.email && touched.email}
									label='Email Address'
									id='email'
									placeholder='alexei@gmail.com'
									type='email'
								/>
								<FormikTextInput
									showError={errors.phone && touched.phone}
									label='Phone Number'
									id='phone'
									placeholder='+1 202-555-1036'
								/>
							</FormSection>

							<FormSection title='Shipping Info'>
								<FormikTextInput
									showError={errors.address && touched.address}
									label='Address'
									id='address'
									placeholder='1137 Williams Avenue'
									fullWidth
								/>
								<FormikTextInput
									showError={errors.zip && touched.zip}
									label='ZIP C0de'
									id='zip'
									placeholder='10002'
								/>
								<FormikTextInput
									showError={errors.city && touched.city}
									label='City'
									id='city'
									placeholder='New York'
								/>
								<FormikTextInput
									showError={errors.country && touched.country}
									label='Country'
									id='country'
									placeholder='United States'
								/>
							</FormSection>

							<FormSection title='Payment Details'>
								<FormikRadioGroup values={values} />
								{values.payment_method === 'emoney' && (
									<>
										<FormikTextInput
											showError={errors.emoney_number && touched.emoney_number}
											label='e-money Number'
											id='emoney_number'
											placeholder='12345678911'
										/>
										<FormikTextInput
											showError={errors.emoney_pin && touched.emoney_pin}
											label='e-moeny PIN'
											id='emoney_pin'
											placeholder='1234'
										/>
									</>
								)}
								{values.payment_method === 'cash' && (
									<div className='flex flex-col items-center md:flex-row space-x-8 col-span-2 mb-12 mt-4'>
										<div className='flex-shrink-0 mb-6 md:mb-0'>
											<img src='/assets/shared/desktop/cashTransaction.svg' alt='' />
										</div>
										<div className='max-w-lg'>
											<p>
												The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
												courier arrives at your residence. Just make sure your address is correct so
												that your order will not be cancelled.
											</p>
										</div>
									</div>
								)}
							</FormSection>
						</Form>
					)
				}}
			</Formik>
		</section>
	)
}

const FormSection = ({ title, children }: { title: string; children: ReactNode }) => {
	return (
		<div className='pb-2'>
			<h3 className='subtitle text-orange-600 mb-4'>{title}</h3>
			<div className='flex flex-col md:grid md:grid-cols-2 md:gap-x-4'>{children}</div>
		</div>
	)
}

const FormikTextInput = ({ label, id, showError, fullWidth = false, ...rest }) => {
	return (
		<label
			htmlFor={id}
			className={`text-[12px] font-bold inline-block 
			mb-2${fullWidth && ' col-span-2'}${showError ? ' text-red-600' : ''}`}
		>
			{label}
			<ErrorMessage
				component='span'
				className='text-red-600 inline-block float-right'
				name={id}
			></ErrorMessage>
			<Field
				id={id}
				name={id}
				{...rest}
				className={` mt-2 w-full px-6 py-3 rounded-lg 
				text-sm font-bold placeholder-opacity-50 ring-1 
				grey-ring focus:orange-ring focus:ring-2 outline-none 
				border-none bg-white-100 mb-6
				${showError && ' ring-red-600 ring-2'}
				`}
			/>
		</label>
	)
}

const FormikRadioGroup = ({ values }) => {
	return (
		<>
			<div id='my-radio-group' className='text-[12px] font-bold mb-2'>
				Payment Method
			</div>
			<div role='group' aria-labelledby='my-radio-group' className='flex flex-col mb-2'>
				<label
					className={`ring-1 ${
						values.payment_method === 'emoney' ? 'ring-orange-600' : 'ring-black-200'
					} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 mb-4`}
				>
					<Field
						type='radio'
						name='payment_method'
						value='emoney'
						className='mr-4 text-orange-600 border-black-200 focus:ring-white-100'
					/>
					e-money
				</label>
				<label
					className={`ring-1 ${
						values.payment_method === 'cash' ? 'ring-orange-600' : 'ring-black-200'
					} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2  mb-2`}
				>
					<Field
						type='radio'
						name='payment_method'
						value='cash'
						className='mr-4 text-orange-600 border-black-200 focus:ring-white-100'
					/>
					Cash on Delivery
				</label>
			</div>
		</>
	)
}
