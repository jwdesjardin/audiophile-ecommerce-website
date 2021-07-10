import React, { ReactNode } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { CartCTX, OrderCTX, UserCTX } from '../../context'
import { DbOrder } from '../../lib/Types'
import Link from 'next/link'

export const FormikForm = () => {
	const { cart, cartTotals, setCart } = React.useContext(CartCTX)
	const { setOrder } = React.useContext(OrderCTX)

	const { activeUser, setActiveUser } = React.useContext(UserCTX)

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
					console.log('order being created')

					setTimeout(async () => {
						try {
							const cart_totals = cartTotals()
							let userID: string | null = null
							if (activeUser !== null) {
								userID = activeUser._id
							}
							let db_order: DbOrder = {
								subtotal: cart_totals.subTotal,
								vaTax: cart_totals.VAT,
								grandTotal: cart_totals.grandTotal,
								cartItems: cart.map((cartItem) => ({
									quantity: cartItem.qty,
									product: {
										cartImage: cartItem.item.cartImage.asset.url,
										slug: cartItem.item.slug.current,
										price: cartItem.item.price,
										name: cartItem.item.name,
										cartName: cartItem.item.cartName,
									},
								})),
								customerInfo: {
									userID: userID || '',
									name: values.name,
									email: values.email,
									phone: values.phone,
									address: values.address,
									zip: values.zip,
									city: values.city,
									country: values.country,
								},
								paymentMethod: values.payment_method,
							}

							if (values.payment_method === 'emoney') {
								db_order = {
									...db_order,
									emoneyNumber: values.emoney_number,
									emoneyPin: values.emoney_pin,
								}
							}

							await fetch('http://34.83.39.138:4000/order', {
								body: JSON.stringify(db_order),
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
							}).then((res) => res.json())
							// await fetch('http://localhost:4000/order', {
							// 	body: JSON.stringify(db_order),
							// 	method: 'POST',
							// 	headers: {
							// 		'Content-Type': 'application/json',
							// 	},
							// }).then((res) => res.json())

							setOrder({ cartTotals: cart_totals, cartItems: cart, customerInfo: { ...values } })
							setCart([])
							setSubmitting(false)
						} catch (e) {
							console.log(e)
							setSubmitting(false)
						}
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
							<div className='border rounded-lg p-3 mb-6'>
								{activeUser ? (
									<p className=''>
										<span className='h6'>Logged in as:</span>
										<span className='text-orange-600'> {activeUser.name}</span>
									</p>
								) : (
									<>
										<Link href='/login'>
											<button className='button-two mb-2'>Login</button>
										</Link>{' '}
										<p className='h6 my-2'>Or</p>
										<p className='h6'>Continue as guest:</p>
									</>
								)}
							</div>
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

export const FormSection = ({ title, children }: { title: string; children: ReactNode }) => {
	return (
		<div className='pb-2'>
			<h3 className='subtitle text-orange-600 mb-4'>{title}</h3>
			<div className='flex flex-col md:grid md:grid-cols-2 md:gap-x-4'>{children}</div>
		</div>
	)
}

export const FormikTextInput = ({ label, id, showError, fullWidth = false, ...rest }) => {
	return (
		<label
			htmlFor={id}
			className={`relative text-[12px] font-bold inline-block 
			mb-2${fullWidth && ' col-span-2'}${showError ? ' text-red-600' : ''}`}
		>
			{label}
			<ErrorMessage
				component='span'
				className='text-red-600 inline-block float-right absolute right-0 top-0'
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
					} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 mb-4 `}
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
					} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2  mb-2 `}
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
