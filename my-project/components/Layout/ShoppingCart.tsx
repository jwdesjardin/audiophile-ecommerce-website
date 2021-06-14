import React from 'react'
import { CTX } from '../../context'
import { ProductCartData } from '../../lib/queryTypes'
import NumberInput from '../NumberInput'

export const ShoppingCart = () => {
	const { cart, setCart } = React.useContext(CTX)
	return (
		<div className='bg-black-900 bg-opacity-30 fixed h-screen w-full'>
			<div className='content-container relative'>
				{/* SHOPPING CART POPUP IN OVERLAY */}
				<div className='bg-white-200 rounded-lg text-black-900 w-full md:w-[377px] absolute right-0 top-10 px-6 py-8'>
					{/* HEADER */}
					<div className='flex justify-between items-center mb-8'>
						<div className=''>
							<p className='h6'>Cart ({countCartItems(cart)})</p>
						</div>
						<button className='text-black-400 underline' onClick={() => setCart([])}>
							Remove all
						</button>
					</div>
					{/* CART ITEM */}
					{cart.map((row) => (
						<CartRow key={row.item.slug.current} row={row}></CartRow>
					))}

					{/* Total and checkout button */}
					<div className='flex justify-between items-center mb-6'>
						<p className='uppercase'>Total</p>
						<p className='h6'>${countCartTotal(cart)}</p>
					</div>
					<button className='button-one w-full'>Checkout</button>
				</div>
			</div>
		</div>
	)
}

const countCartItems = (
	cart: {
		item: ProductCartData
		qty: number
	}[]
): number => {
	return cart.length
}

const countCartTotal = (
	cart: {
		item: ProductCartData
		qty: number
	}[]
): number => {
	return cart.reduce((a, c) => a + c.item.price * c.qty, 0)
}

const CartRow = ({
	row,
}: {
	row: {
		item: ProductCartData
		qty: number
	}
}) => {
	const { cart, setCart } = React.useContext(CTX)
	console.log(cart)
	return (
		<div className='flex items-center justify-between mb-6'>
			<div className='rounded-lg overflow-hidden'>
				<img src='/assets/cart/image-xx99-mark-two-headphones.jpg' className='h-16' alt='' />
			</div>
			<div className=''>
				<h2 className='font-bold uppercase'>{row.item.name}</h2>
				<p className='text-black-400'>${row.item.price}</p>
			</div>
			<div className='w-24 flex flex-col items-center'>
				<NumberInput
					controlledQty={row.qty}
					incFunc={() => {
						setCart((prevState) => {
							const copy = [...prevState]
							const index = prevState.findIndex((temp) => temp.item.slug === row.item.slug)
							copy[index] = { item: row.item, qty: row.qty + 1 }
							return copy
						})
					}}
					decFunc={() => {
						setCart((prevState) => {
							const copy = [...prevState]
							const index = prevState.findIndex((temp) => temp.item.slug === row.item.slug)
							copy[index] = { item: row.item, qty: row.qty - 1 }
							return copy
						})
					}}
				></NumberInput>
				{row.qty === 0 && (
					<button
						onClick={() => {
							setCart((prevState) => {
								const filtered = prevState.filter((temp) => temp.item.slug !== row.item.slug)
								return [...filtered]
							})
						}}
						className='text-red-600 underline'
					>
						Remove
					</button>
				)}
			</div>
		</div>
	)
}
