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
