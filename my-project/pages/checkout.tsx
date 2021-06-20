import React from 'react'

import { FormikForm } from '../components/Checkout/FormikForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import Layout from '../components/Layout'

const checkout = () => {
	return (
		<Layout goBackButton>
			<div className='flex flex-col lg:flex-row lg:items-start lg:space-x-8 lg:mb-[140px] content-container'>
				<FormikForm></FormikForm>
				<div className='lg:w-[350px] lg:flex-shrink-0'>
					<OrderSummary />
				</div>
			</div>
		</Layout>
	)
}

export default checkout
