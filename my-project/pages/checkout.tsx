import React from 'react'
import { CheckoutForm } from '../components/Checkout/CheckoutForm'
import { CheckoutFormNew } from '../components/Checkout/CheckoutFormNew'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import Layout from '../components/Layout'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div>
				<CheckoutFormNew></CheckoutFormNew>
				<OrderSummary />
			</div>
		</Layout>
	)
}

export default checkout
