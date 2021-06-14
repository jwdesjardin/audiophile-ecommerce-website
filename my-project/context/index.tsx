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
	const [cart, setCart] = React.useState<{ item: ProductCartData; qty: number }[]>([])

	return <CTX.Provider value={{ cart, setCart }}>{children}</CTX.Provider>
}
