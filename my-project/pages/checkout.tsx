import React from 'react'
import Layout from '../components/Layout'
import RadioGroup from '../components/RadioInput'
import TextInput from '../components/TextInput'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div>
				<section className='content-container'>
					<h2 className='h4 mb-8'>Checkout</h2>
					<form action=''>
						<div className='pb-2'>
							<h4 className='subtitle text-orange-600 mb-4'>Billing Details</h4>
							<div className='md:grid md:grid-cols-2'>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='Name'
									placeholder='Alexei Ward'
								></TextInput>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='Email Address'
									type='email'
									placeholder='alexei@gmail.com'
								></TextInput>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='Phone Number'
									placeholder='+1 202-555-0136'
								></TextInput>
							</div>
						</div>
						<div className='pb-2'>
							<h4 className='subtitle text-orange-600 mb-4'>Shipping Info</h4>
							<TextInput
								className='mb-6'
								controlledText={''}
								setText={() => {}}
								label='Address'
								placeholder='1137 Williams Avenue'
							></TextInput>

							<div className='md:grid md:grid-cols-2'>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='ZIP Code'
									placeholder='10002'
								></TextInput>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='City'
									placeholder='New York'
								></TextInput>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='Country'
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
									controlledText={''}
									setText={() => {}}
									label='e-moneyNumber'
									placeholder='1234568911'
								></TextInput>
								<TextInput
									className='mb-6'
									controlledText={''}
									setText={() => {}}
									label='e-moneyPin'
									placeholder='1234'
								></TextInput>
							</div>
						</div>
					</form>
				</section>
				<aside>
					<h3>Summary</h3>
					<div>{/* ROWS */}</div>
					<div>
						<div>
							<p>Total</p>
							<p>$3,789</p>
						</div>
						<div>
							<p>Total</p>
							<p>$3,789</p>
						</div>
						<div>
							<p>Total</p>
							<p>$3,789</p>
						</div>
						<div>
							<p>Total</p>
							<p>$3,789</p>
						</div>
					</div>
					<button>Continue & Pay</button>
				</aside>
			</div>
		</Layout>
	)
}

export default checkout
