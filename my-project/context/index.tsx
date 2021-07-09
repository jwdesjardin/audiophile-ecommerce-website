import React, { useCallback } from 'react'
import { ProductCartData } from '../lib/queryTypes'
import { ActiveUser, CartItem, PlacedOrder } from '../lib/Types'

// CART CONTEXT

interface CartContext {
	cart: CartItem[]
	setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
	cartTotals: () => { subTotal: number; VAT: number; grandTotal: number }
	cartVisible: boolean
	toggleCartVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartCTX = React.createContext<CartContext>({
	cart: [],
	setCart: (item) => {},
	cartTotals: () => ({ subTotal: 0, VAT: 0, grandTotal: 0 }),
	cartVisible: false,
	toggleCartVisible: (state: boolean) => {},
})

export function CartWrapper({ children }) {
	const [cart, setCart] = React.useState<CartItem[]>([])
	const [cartVisible, toggleCartVisible] = React.useState(false)

	React.useEffect(() => {
		const foundCart = localStorage.getItem('audiophile-cart')
		let parsed: CartItem[] = []
		if (foundCart) {
			parsed = JSON.parse(foundCart)
		}
		setCart(parsed)
		console.log(parsed)
	}, [])
	// find audio cart from local storgae or reset if not there

	const cartTotals = React.useCallback(() => {
		const subTotal = cart.reduce((a, c) => a + c.item.price * c.qty, 0)
		const VAT = subTotal * 0.2
		const grandTotal = subTotal + VAT + 50
		return { subTotal, VAT, grandTotal }
	}, [cart])

	return (
		<CartCTX.Provider value={{ cart, setCart, cartTotals, cartVisible, toggleCartVisible }}>
			{children}
		</CartCTX.Provider>
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

// USER CONTEXT

interface UserContext {
	activeUser: ActiveUser | null
	setActiveUser: React.Dispatch<React.SetStateAction<ActiveUser>>
	userMenuVisible: boolean
	toggleUserMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserCTX = React.createContext<UserContext>({
	activeUser: null,
	setActiveUser: () => {},
	userMenuVisible: false,
	toggleUserMenuVisible: () => {},
})

export function UserWrapper({ children }) {
	const [activeUser, setActiveUser] = React.useState<ActiveUser | null>(null)
	const [userMenuVisible, toggleUserMenuVisible] = React.useState(false)

	React.useEffect(() => {
		const foundUser = localStorage.getItem('activeUser')
		if (foundUser) {
			setActiveUser(JSON.parse(foundUser))
		}
	}, [])

	return (
		<UserCTX.Provider value={{ activeUser, setActiveUser, userMenuVisible, toggleUserMenuVisible }}>
			{children}
		</UserCTX.Provider>
	)
}
