import Link from 'next/link'
import React from 'react'
import { CartCTX } from '../../context'
import { ProductCartData } from '../../lib/queryTypes'
import NumberInput from '../NumberInput'

export const ShoppingCart = () => {
	const { cart, setCart, cartTotals, toggleCartVisible } = React.useContext(CartCTX)

	const [emptyCartMsg, toggleEmptyCartMessage] = React.useState(false)

	return (
		<div
			id='overlay'
			onClick={(e) => {
				console.log(e.target['id'])
				if (e.target['id'] === 'overlay') {
					toggleCartVisible(false)
				}
			}}
			className='bg-black-900 bg-opacity-30 fixed h-screen w-full top-0 z-10'
		>
			<div className='content-container relative'>
				{/* SHOPPING CART POPUP IN OVERLAY */}
				<div className='bg-white-200 rounded-lg text-black-900 w-full md:w-[377px] absolute right-0 top-32 px-6 py-8'>
					{/* HEADER */}
					<div className='flex justify-between items-center mb-8'>
						<div className=''>
							<p className='h6'>Cart ({cart.length})</p>
						</div>
						<button
							className='text-black-400 underline'
							onClick={() => {
								setCart([])
								localStorage.setItem('audiophile-cart', JSON.stringify([]))
							}}
						>
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
						<p className='h6'>${cartTotals().subTotal.toLocaleString()}</p>
					</div>
					<Link href='/checkout' passHref>
						<a>
							{emptyCartMsg && (
								<p className='text-red-600 text-sm text-center mb-2'>
									Please add items to the cart
								</p>
							)}
							<button
								className='button-one w-full'
								onClick={(e) => {
									if (cartTotals().subTotal === 0) {
										e.preventDefault()
										if (emptyCartMsg === false) {
											toggleEmptyCartMessage(true)
											setTimeout(() => {
												toggleEmptyCartMessage(false)
											}, 4000)
										}
									} else {
										toggleCartVisible(false)
									}
								}}
							>
								Checkout
							</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

const CartRow = ({
	row,
}: {
	row: {
		item: ProductCartData
		qty: number
	}
}) => {
	const { cart, setCart } = React.useContext(CartCTX)
	console.log(row)
	return (
		<div className='flex items-center justify-between mb-6'>
			<div className='rounded-lg overflow-hidden flex-shrink-0'>
				<img src={row.item.cartImage.asset.url} className='h-16' alt='' />
			</div>
			<div className='w-full ml-4'>
				<Link passHref href={`/product/${row.item.slug.current}`}>
					<a>
						<h2 className='font-bold uppercase'>{row.item.cartName}</h2>
					</a>
				</Link>
				<p className='text-black-400'>${row.item.price.toLocaleString()}</p>
			</div>
			<div className='w-24 flex flex-col items-center flex-shrink-0'>
				<NumberInput
					controlledQty={row.qty}
					incFunc={() => {
						const newCart = [...cart]
						const index = cart.findIndex((temp) => temp.item.slug === row.item.slug)
						newCart[index] = { item: row.item, qty: row.qty + 1 }
						setCart(newCart)
						localStorage.setItem('audiophile-cart', JSON.stringify(newCart))
					}}
					decFunc={() => {
						const newCart = [...cart]
						const index = cart.findIndex((temp) => temp.item.slug === row.item.slug)
						newCart[index] = { item: row.item, qty: row.qty - 1 }
						setCart(newCart)
						localStorage.setItem('audiophile-cart', JSON.stringify(newCart))
					}}
				></NumberInput>
				{row.qty === 0 && (
					<button
						onClick={() => {
							const filtered = cart.filter((temp) => temp.item.slug !== row.item.slug)
							const newCart = [...filtered]
							setCart(newCart)
							localStorage.setItem('audiophile-cart', JSON.stringify(newCart))
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
