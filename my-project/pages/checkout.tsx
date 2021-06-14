import React from 'react'
import { CheckoutForm } from '../components/Checkout/CheckoutForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import Layout from '../components/Layout'

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
