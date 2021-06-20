import React from 'react'
import { CartCTX } from '../../context'
import { ProductCartData } from '../../lib/queryTypes'

export const OrderSummary = () => {
	const { cart, cartTotals } = React.useContext(CartCTX)

	const [{ subTotal, VAT, grandTotal }, setTotals] = React.useState<ReturnType<typeof cartTotals>>({
		subTotal: 0,
		VAT: 0,
		grandTotal: 0,
	})

	React.useEffect(() => {
		setTotals(cartTotals())
	}, [cartTotals])

	const DetailRow = ({ label, value }: { label: string; value: string }) => (
		<div className='flex justify-between mb-2'>
			<p className='font-extralight uppercase'>{label}</p>
			<p className='font-bold text-lg'>$ {value}</p>
		</div>
	)

	return (
		<aside className=' p-6 bg-white-100 rounded-lg mb-24'>
			<h3 className='text-lg uppercase font-bold mb-8'>Summary</h3>
			<div className=''>
				{/* ROWS */}
				{cart.map((row) => (
					<CartItem key={row.item.slug.current} row={row} />
				))}
			</div>
			<div>
				<DetailRow label='Total' value={subTotal.toLocaleString()}></DetailRow>
				<DetailRow label='Shipping' value='50'></DetailRow>
				<DetailRow
					label='VAT (Included)'
					value={VAT.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2,
					})}
				></DetailRow>
				<div className='flex justify-between mb-8 pt-2'>
					<p className='font-extralight uppercase'>Grand Total</p>
					<p className='font-bold text-lg text-orange-600'>
						${' '}
						{grandTotal.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</p>
				</div>
			</div>
			<button className='button-one w-full' type='submit' form='user-info'>
				Continue & Pay
			</button>
		</aside>
	)
}

const CartItem = ({
	row,
}: {
	row: {
		item: ProductCartData
		qty: number
	}
}) => {
	return (
		<div className='flex justify-between items-center mb-6'>
			<div className='mr-4 max-w-[64px] rounded-lg overflow-hidden'>
				<img src={row.item.cartImage.asset.url} alt='' />
			</div>
			<div className='flex flex-col items-start w-full'>
				<p className='font-bold uppercase'>{row.item.name}</p>
				<p className='text-black-400'>${row.item.price.toLocaleString()}</p>
			</div>
			<div>
				<p className='text-black-400'>x{row.qty}</p>
			</div>
		</div>
	)
}
