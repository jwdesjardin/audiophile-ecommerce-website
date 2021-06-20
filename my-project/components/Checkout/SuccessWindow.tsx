import Link from 'next/link'
import React from 'react'
import { OrderCTX } from '../../context'

export const SuccessWindow = () => {
	const { setOrder } = React.useContext(OrderCTX)
	return (
		<div className='bg-white-100 p-8 md:p-12 mx-6 rounded-lg md:w-[540px]'>
			<div className='mb-6 md:mb-8'>
				<div className='mb-8'>
					<img src='/assets/shared/desktop/icon-check-circle.svg' alt='' />
				</div>
				<h2 className='h5 md:h3 mb-4 md:mb-6 max-w-xs'>Thank you for your order</h2>
				<p className='text-black-400'>You will recieve an email confirmation shortly.</p>
			</div>

			<OrderReview />
			<Link href='/' passHref>
				<a>
					<button className='button-one w-full' onClick={() => setOrder(null)}>
						Back To Home
					</button>
				</a>
			</Link>
		</div>
	)
}

const OrderReview = () => {
	const { order } = React.useContext(OrderCTX)
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
							<li className='flex items-center justify-between mb-2'>
								<div className='w-[50px] flex-shrink-0'>
									<img src={item.item.cartImage.asset.url} alt='' />
								</div>
								<div className='w-full ml-4'>
									<p className='uppercase font-bold'>{item.item.name}</p>
									<p className='text-black-400 font-bold'>{item.item.price}</p>
								</div>
								<div className='text-black-400 font-bold'>x{item.qty}</div>
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
						{order.cartTotals.grandTotal.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</p>
				</div>
			</div>
		</div>
	)
}
