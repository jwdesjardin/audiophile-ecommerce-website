import React from 'react'
import { CheckoutForm } from '../components/Checkout/CheckoutForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import Layout from '../components/Layout'
import RadioGroup from '../components/RadioInput'
import TextInput from '../components/TextInput'
import { CTX } from '../context'
import { ProductCartData } from '../lib/queryTypes'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div>
				<CheckoutForm></CheckoutForm>
				<OrderSummary />
			</div>
		</Layout>
	)
}

export default checkout
