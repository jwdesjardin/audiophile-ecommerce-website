import React, { useCallback } from 'react'
import { ProductCartData } from '../lib/queryTypes'
import { CartItem, PlacedOrder } from '../lib/Types'

// CART CONTEXT

interface CartContext {
	cart: CartItem[]
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
	cartTotals: () => { subTotal: number; VAT: number; grandTotal: number }
	cartItems: () => { item: ProductCartData; quantity: number; sku: string }[]
}

export const CartCTX = React.createContext<CartContext>({
	cart: [],
	setCart: (item) => {},
	cartTotals: () => ({ subTotal: 0, VAT: 0, grandTotal: 0 }),
	cartItems: () => [],
})

export function CartWrapper({ children }) {
	const [cart, setCart] = React.useState<CartItem[]>([])

	const cartTotals = React.useCallback(() => {
		const subTotal = cart.reduce((a, c) => a + c.item.price * c.qty, 0)
		const VAT = subTotal * 0.2
		const grandTotal = subTotal + VAT + 50
		return { subTotal, VAT, grandTotal }
	}, [cart])

	const cartItems = React.useCallback(() => {
		return cart.reduce(
			(a, c) => [...a, { item: c.item, quantity: c.qty, sku: c.item.slug.current }],
			[]
		)
	}, [cart])

	return (
		<CartCTX.Provider value={{ cart, setCart, cartTotals, cartItems }}>{children}</CartCTX.Provider>
	)
}

// ORDER CONTEXT

interface OrderContext {
	order: PlacedOrder | null
	setOrder: React.Dispatch<React.SetStateAction<PlacedOrder>>
}

export const OrderCTX = React.createContext<OrderContext>({
	order: null,
	setOrder: () => {},
})

export function OrderWrapper({ children }) {
	const [order, setOrder] = React.useState<PlacedOrder | null>(null)

	return <OrderCTX.Provider value={{ order, setOrder }}>{children}</OrderCTX.Provider>
}
