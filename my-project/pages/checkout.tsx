import React from 'react'

import { FormikForm } from '../components/Checkout/FormikForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import Layout from '../components/Layout'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div>
				<FormikForm></FormikForm>
				<OrderSummary />
			</div>
		</Layout>
	)
}

export default checkout
