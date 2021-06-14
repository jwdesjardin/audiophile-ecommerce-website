import React from 'react'

const TextInput = ({
	controlledText,
	setText,
	label,
	placeholder,
	type = 'text',
	className,
}: {
	controlledText: string
	setText: React.Dispatch<React.SetStateAction<string>>
	label: string
	placeholder?: string
	type?: string
	className?: string
}) => {
	const id = label.toLowerCase().replace(/\s/, '')
	return (
		<div className={'flex flex-col text-input' + (className ? ` ${className}` : '')}>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				value={controlledText}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	)
}

export default TextInput
