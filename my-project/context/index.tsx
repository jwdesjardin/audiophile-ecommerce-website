import React from 'react'
import { ProductCartData } from '../lib/queryTypes'

interface CartContext {
	cart: { item: ProductCartData; qty: number }[]
	setCart: React.Dispatch<
		React.SetStateAction<
			{
				item: ProductCartData
				qty: number
			}[]
		>
	>
}

export const CTX = React.createContext<CartContext>({} as CartContext)

export function CustomWrapper({ children }) {
	const [cart, setCart] = React.useState<{ item: ProductCartData; qty: number }[]>([
		{
			item: {
				name: 'XX99 MK II',
				price: 2999,
				slug: { type: 'slug', current: 'xx99-headphones-mark-two' },
				cartImage: { asset: { url: '/assets/cart/image-xx99-mark-two-headphones.jpg' } },
			},
			qty: 2,
		},
	])

	return <CTX.Provider value={{ cart, setCart }}>{children}</CTX.Provider>
}
