import React, { ReactNode } from 'react'
import { FormikData } from '../lib/Types'

const TextInput = ({
	label,
	id,
	placeholder,
	type = 'text',
	className,
	formik,
}: {
	label: string
	id: string
	placeholder?: string
	type?: string
	className?: string
	formik: FormikData
}) => {
	return (
		<div className={'flex flex-col text-input' + (className ? ` ${className}` : '')}>
			<label htmlFor={id}>{label}</label>
			{formik.error && formik.touched && <ErrorText>{formik.error}</ErrorText>}
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				value={formik.value}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
		</div>
	)
}

const ErrorText = ({ children }: { children: ReactNode }) => {
	return <p className='form-error-text'>{children}</p>
}

export default TextInput
