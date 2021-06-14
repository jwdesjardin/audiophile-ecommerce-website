import React from 'react'
import Layout from '../components/Layout'
import RadioGroup from '../components/RadioInput'
import TextInput from '../components/TextInput'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div>
				<section className=''>
					<h2>Checkout</h2>
					<form action=''>
						<div>
							<h4>Billing Details</h4>
							<div className='md:grid md:grid-cols-2'>
								<TextInput controlledText={''} setText={() => {}} label='Name'></TextInput>
								<TextInput
									controlledText={''}
									setText={() => {}}
									label='Email Address'
									type='email'
								></TextInput>
								<TextInput controlledText={''} setText={() => {}} label='Phone Number'></TextInput>
							</div>
						</div>
						<div>
							<h4>Shipping Info</h4>
							<TextInput controlledText={''} setText={() => {}} label='Address'></TextInput>

							<div className='md:grid md:grid-cols-2'>
								<TextInput controlledText={''} setText={() => {}} label='ZIP Code'></TextInput>
								<TextInput controlledText={''} setText={() => {}} label='City'></TextInput>
								<TextInput controlledText={''} setText={() => {}} label='Country'></TextInput>
							</div>
						</div>

						<div>
							<h4>Payment Details</h4>
							<RadioGroup
								title='Payment Method'
								values={['e-money', 'cash']}
								controlledState={''}
								setRadio={() => {}}
							></RadioGroup>
							<div>
								<div className='text-input'>
									<label htmlFor='emoney_num'>e-money Number</label>
									<input id='emoney_num' type='text' />
								</div>
								<div className='text-input'>
									<label htmlFor='emoney_pin'>e-money PIN</label>
									<input id='emoney_pin' type='text' />
								</div>
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
