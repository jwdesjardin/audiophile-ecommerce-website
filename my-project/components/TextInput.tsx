import React from 'react'

const TextInput = ({
	controlledText,
	setText,
	label,
	placeholder,
	type = 'text',
}: {
	controlledText: string
	setText: React.Dispatch<React.SetStateAction<string>>
	label: string
	placeholder?: string
	type?: string
}) => {
	const id = label.toLowerCase().trim()
	return (
		<div className='flex flex-col text-input'>
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
