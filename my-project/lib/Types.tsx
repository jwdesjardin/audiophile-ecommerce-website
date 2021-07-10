import { ProductCartData } from './queryTypes'

export interface FormikData {
	error: string
	value: string
	touched: boolean
	handleChange: {
		(e: React.ChangeEvent<any>): void
		<T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void
	}
	handleBlur: {
		(e: React.FocusEvent<any>): void
		<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
	}
}

interface CustomerInfo {
	name: string
	email: string
	phone: string
	address: string
	zip: string
	city: string
	country: string
	payment_method: string
	emoney_number?: string
	emoney_pin?: string
}

export type CartItem = {
	item: ProductCartData
	qty: number
}

export type PlacedOrder = {
	cartTotals: {
		subTotal: number
		VAT: number
		grandTotal: number
	}
	cartItems: CartItem[]
	customerInfo: CustomerInfo
}

export type ActiveUser = {
	_id: string
	name: string
	email: string
	isAdmin: boolean
}

export interface DbOrder {
	subtotal: number
	vaTax: number
	grandTotal: number
	cartItems: {
		quantity: number
		product: {
			cartImage: string
			slug: string
			price: number
			name: string
			cartName: string
		}
		orderId?: number
	}[]
	customerInfo: {
		userID: string
		name: string
		email: string
		phone: string
		address: string
		zip: string
		city: string
		country: string
	}
	paymentMethod: string
	emoneyNumber?: string
	emoneyPin?: string
}
