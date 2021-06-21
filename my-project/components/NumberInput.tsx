import React from 'react'

function NumberInput({
	controlledQty,
	incFunc,
	decFunc,
}: {
	controlledQty: number
	incFunc?: () => void
	decFunc?: () => void
}) {
	return (
		<div
			// ARIA roles for accessbility
			role='slider'
			aria-valuenow={controlledQty}
			aria-valuemin={0}
			tabIndex={0}
			className='number-input'
			// this keydown event stops page scrolling
			onKeyDown={(e) => {
				console.log(e.code)
				if (e.code == 'ArrowUp' || e.code === 'ArrowDown') {
					e.preventDefault()
				}
				if (e.code === 'ArrowUp' || e.code === 'ArrowRight') {
					incFunc()
				} else if ((e.code === 'ArrowDown' || e.code === 'ArrowLeft') && controlledQty > 0) {
					decFunc()
				}
			}}
		>
			<button onClick={decFunc} disabled={controlledQty === 0} tabIndex={-1}>
				-
			</button>
			<span>{controlledQty}</span>
			<button onClick={incFunc} tabIndex={-1}>
				+
			</button>
		</div>
	)
}

export default NumberInput
