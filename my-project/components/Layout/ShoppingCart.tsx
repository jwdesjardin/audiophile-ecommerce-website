import React from 'react'
import NumberInput from '../NumberInput'

export const ShoppingCart = () => {
	return (
		<div className='bg-black-900 bg-opacity-30 absolute h-full w-full'>
			<div className='content-container relative'>
				{/* SHOPPING CART POPUP IN OVERLAY */}
				<div className='bg-white-200 rounded-lg text-black-900 w-full md:w-[377px] absolute right-0 top-10 px-6 py-8'>
					{/* HEADER */}
					<div className='flex justify-between items-center mb-8'>
						<div className=''>
							<p className='h6'>Cart (3)</p>
						</div>
						<button className='text-black-400 underline'>Remove all</button>
					</div>
					{/* CART ITEM */}
					<div className='flex items-center justify-between mb-6'>
						<div className='rounded-lg overflow-hidden'>
							<img src='/assets/cart/image-xx99-mark-two-headphones.jpg' className='h-16' alt='' />
						</div>
						<div className=''>
							<h2 className='font-bold uppercase'>XX99 MK II</h2>
							<p className='text-black-400'>$2,999</p>
						</div>
						<div className='w-24'>
							<NumberInput controlledQty={0} setQty={(num) => num}></NumberInput>
						</div>
					</div>
					{/* Total and checkout button */}
					<div className='flex justify-between items-center mb-6'>
						<p className='uppercase'>Total</p>
						<p className='h6'>$5,396</p>
					</div>
					<button className='button-one w-full'>Checkout</button>
				</div>
			</div>
		</div>
	)
}
