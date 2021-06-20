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
	cartTotal: number
	cartSub: number
	cartVAT: number
	cartGrandTotal: number
	cartItems: CartItem[]
	customerInfo: CustomerInfo
}
