import React from 'react'

const TextInput = ({
	controlledText,
	setText,
}: {
	controlledText: string
	setText: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<div className='flex flex-col text-input'>
			<label htmlFor='name'>Name</label>
			<input
				type='text'
				id='name'
				placeholder='Insert your name'
				value={controlledText}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	)
}

export default TextInput
