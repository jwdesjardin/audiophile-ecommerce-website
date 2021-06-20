import React, { ReactNode } from 'react'
import { Formik, Field, Form } from 'formik'

export const CheckoutFormNew = () => {
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
						alert(JSON.stringify({ ...values }, null, 2))
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
						<Form onSubmit={handleSubmit}>
							<FormSection title='Billing Details'>
								<FormikTextInput label='Name' id='name' placeholder='Alexei Ward' />
								<FormikTextInput
									label='Email Address'
									id='email'
									placeholder='alexei@gmail.com'
									type='email'
								/>
								<FormikTextInput label='Phone Number' id='phone' placeholder='+1 202-555-1036' />
							</FormSection>

							<FormSection title='Shipping Info'>
								<FormikTextInput label='Address' id='address' placeholder='1137 Williams Avenue' />
								<FormikTextInput label='ZIP C0de' id='zip' placeholder='10002' />
								<FormikTextInput label='City' id='city' placeholder='New York' />
								<FormikTextInput label='Country' id='country' placeholder='United States' />
							</FormSection>

							<FormSection title='Payment Details'>
								<FormikRadioGroup values={values} />

								{values.payment_method === 'emoney' && (
									<>
										<FormikTextInput
											label='e-money Number'
											id='emoney_number'
											placeholder='12345678911'
										/>
										<FormikTextInput label='e-moeny PIN' id='emoney_pin' placeholder='1234' />
									</>
								)}
							</FormSection>

							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
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
			{children}
		</div>
	)
}

const FormikTextInput = ({ label, id, ...rest }) => {
	return (
		<>
			<label htmlFor={id} className='text-[12px] font-bold inline-block mb-2'>
				{label}
			</label>
			<Field
				id={id}
				name={id}
				{...rest}
				className=' w-full px-6 py-3 rounded-lg text-sm font-bold placeholder-opacity-50 ring-1 grey-ring focus:orange-ring focus:ring-2 outline-none border-none bg-white-100 mb-6'
			/>
		</>
	)
}

const FormikRadioGroup = ({ values }) => {
	return (
		<>
			<div id='my-radio-group'>Payment Method</div>
			<div role='group' aria-labelledby='my-radio-group' className='flex flex-col'>
				<label
					className={`ring-1 ${
						values.payment_method === 'emoney' ? 'ring-orange-600' : 'ring-black-200'
					} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 mb-2`}
				>
					<Field
						type='radio'
						name='payment_method'
						value='emoney'
						className='mr-4 text-orange-600 border-black-200 focus:ring-white-100'
					/>
					E-money
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
					Cash
				</label>
				<div>Payment Method: {values.payment_method}</div>
			</div>
		</>
	)
}
