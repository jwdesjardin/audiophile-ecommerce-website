import React from 'react'

const NumberInput = ({
	controlledQty,
	setQty,
}: {
	controlledQty: number
	setQty: React.Dispatch<React.SetStateAction<number>>
}) => {
	return (
		<div
			role='slider'
			aria-valuenow={controlledQty}
			aria-valuemin={0}
			className='number-input'
			tabIndex={0}
			// this keydown event stops page scrolling
			onKeyDown={(e) => {
				console.log(e.code)
				if (e.code == 'ArrowUp' || e.code === 'ArrowDown') {
					e.preventDefault()
				}
			}}
			onKeyUp={(e) => {
				if (e.code === 'ArrowUp' || e.code === 'ArrowRight') {
					setQty((prevState) => prevState + 1)
				} else if ((e.code === 'ArrowDown' || e.code === 'ArrowLeft') && controlledQty > 0) {
					setQty(controlledQty - 1)
				}
			}}
		>
			<button
				onClick={() => setQty(controlledQty - 1)}
				disabled={controlledQty === 0}
				tabIndex={-1}
			>
				-
			</button>
			<span>{controlledQty}</span>
			<button onClick={() => setQty(controlledQty + 1)} tabIndex={-1}>
				+
			</button>
		</div>
	)
}

export default NumberInput
