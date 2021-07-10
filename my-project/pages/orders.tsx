import { useRouter } from 'next/router'
import React from 'react'

import Layout from '../components/Layout'
import { UserCTX } from '../context'
import { ApiOrder } from '../lib/queryTypes'

const orders = () => {
	const { activeUser } = React.useContext(UserCTX)
	const [orders, setOrders] = React.useState<ApiOrder[]>([])

	const router = useRouter()

	React.useEffect(() => {
		if (activeUser) {
			;(async () => {
				// const res = await fetch(`http://localhost:4000/order/${activeUser._id}`)
				const res = await fetch(`https://audiophile-users.herokuapp.com/order/${activeUser._id}`)
				const data: ApiOrder[] = await res.json()
				setOrders(data)
			})()
		} else {
			router.push('/')
		}
	}, [activeUser])

	console.log(orders)

	return (
		<Layout goBackButton>
			<div className='content-container'>
				<h2 className='h2 text-center mb-6'>Orders</h2>
				{orders.map((order) => (
					<div key={order.id} className='my-8'>
						<h2 className='subtitle'>Order Details</h2>
						<div className='text-sm my-4 border-black-600 border rounded-lg p-4'>
							<p>Order #:{order.id}</p>
							<p>Name: {order.customerInfo.name}</p>
							<p>Email: {order.customerInfo.email}</p>
							<p>Ordered Date: {order.createdAt.slice(0, 10)}</p>
						</div>
						<OrderReview order={order}></OrderReview>
					</div>
				))}
			</div>
		</Layout>
	)
}

export default orders

export const OrderReview = ({ order }: { order: ApiOrder }) => {
	const [list, setList] = React.useState(order.cartItems.slice(0, 2))
	const [maxView, toggleMaxView] = React.useState(false)

	React.useEffect(() => {
		if (maxView) {
			setList(order.cartItems)
		} else {
			setList(order.cartItems.slice(0, 1))
		}
	}, [maxView])

	return (
		<div className='rounded-lg overflow-hidden mb-6 md:mb-12 w-full'>
			<div className='flex flex-col md:flex-row w-full'>
				<div className='bg-white-400 p-6 md:w-7/12'>
					<ul className='w-full border-b border-black-400 mb-2 border-opacity-50 '>
						{list.map((item) => (
							<li key={item.product.slug} className='flex items-center justify-between mb-2'>
								<div className='w-[50px] md:w-[75px]  flex-shrink-0'>
									<img src={item.product.cartImage} alt='' />
								</div>
								<div className='w-full ml-4'>
									<p className='uppercase font-bold'>{item.product.cartName}</p>
									<p className='text-black-400 font-bold'>{item.product.price}</p>
								</div>
								<div className='text-black-400 font-bold'>x{item.quantity}</div>
							</li>
						))}
					</ul>
					<button
						className='text-sm text-black-400 font-bold w-full lowercase'
						onClick={() => toggleMaxView(!maxView)}
					>
						{maxView
							? 'View Less'
							: order.cartItems.length > 1
							? `and ${order.cartItems.length - 1} other item(s)`
							: ''}
					</button>
				</div>
				<div className='bg-black-900 text-white-200 p-6 md:w-5/12 flex flex-col justify-end pb-10'>
					<p className='uppercase font-extralight mb-2 text-black-400'>Grand Total</p>
					<p className='h6'>
						$
						{order.grandTotal.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</p>
				</div>
			</div>
		</div>
	)
}
