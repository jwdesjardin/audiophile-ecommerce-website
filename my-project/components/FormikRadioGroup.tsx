import { Field } from 'formik'
import React from 'react'

export const FormikRadioGroup = ({
	title,
	values,
	error,
	touched,
	controlledState,
	onBlur,
	onChange,
}: {
	title: string
	values: { value: string; label: string }[]
	error: string
	touched: boolean
	controlledState: string
	onBlur: {
		(e: React.FocusEvent<any>): void
		<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
	}
	onChange: {
		(e: React.ChangeEvent<any>): void
		<T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void
	}
}) => {
	const RadioInput = ({ value, label }) => {
		return (
			<div
				className={`ring-1 ${
					controlledState === value ? 'ring-orange-600' : 'ring-black-200'
				} rounded-lg py-3 px-6 max-w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 `}
				// onClick={() => setRadio(value)}
				// tabIndex={0}
				// onKeyUp={(e) => {
				// 	if (e.code === 'Space') {
				// 		setRadio(value)
				// 		console.log('space')
				// 	}
				// }}
			>
				<input
					type='radio'
					className='border-black-200 text-orange-600 bg-white-200 focus:ring-orange-600 focus:ring-opacity-0'
					value={value}
					onChange={onChange}
					checked={controlledState === value}
					// tabIndex={-1}
					name='payment_method'
					id={controlledState}
					onBlur={onBlur}
				/>
				{/* <Field type='radio' name='payment_method' value={value}></Field> */}
				<label className='ml-4 text-sm font-bold'>{label}</label>
			</div>
		)
	}

	return (
		<div className='radio-group' role='radiogroup'>
			<label className='inline-block' htmlFor='' aria-labelledby={title}>
				{title}
			</label>
			{error && touched ? <div>{error}</div> : null}
			{values.map(({ value, label }) => (
				<div key={value} className='mb-4'>
					<RadioInput value={value} label={label}></RadioInput>
				</div>
			))}
		</div>
	)
}

{
	/* SOLUTION #2 */
}

// const RadioGroup = ({
// 	title,
// 	values,
// 	controlledState,
// 	setRadio,
// }: {
// 	title: string
// 	values: string[]
// 	controlledState: string
// 	setRadio: React.Dispatch<React.SetStateAction<string>>
// }) => {
// 	const RadioInput = ({ value }) => {
// 		return (
// 			<div
// 				// ACESSEBILITY properties
// 				role='radio'
// 				aria-checked={controlledState === value}
// 				tabIndex={0}
// 				// styles cotnrolled by state
// 				className={controlledState === value ? 'radio-input ring-orange-600' : 'radio-input'}
// 				// two ways to change state
// 				onClick={() => setRadio(value)}
// 				onKeyUp={(e) => {
// 					console.log(e.code)
// 					if (e.code === 'Space') {
// 						setRadio(value)
// 					}
// 				}}
// 			>
// 				{/* custom radio button  */}
// 				<div
// 					className={controlledState === value ? 'radio-button radio-checked' : 'radio-button'}
// 				></div>
// 				<p className='radio-label'>e-Money</p>
// 			</div>
// 		)
// 	}

// 	return (
// 		<div role='radiogroup'>
// 			<label htmlFor='' aria-labelledby={title}>
// 				{title}
// 			</label>
// 			{values.map((value) => (
// 				<div key={value} className='mb-4'>
// 					<RadioInput value={value}></RadioInput>
// 				</div>
// 			))}
// 		</div>
// 	)
// }
