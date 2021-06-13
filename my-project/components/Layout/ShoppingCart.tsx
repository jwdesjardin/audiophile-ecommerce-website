import React from 'react'
import NumberInput from '../NumberInput'

export const ShoppingCart = () => {
	return (
		<div>
			{/* SHOPPING CART POPUP IN OVERLAY */}
			<div>
				{/* HEADER */}
				<div>
					<div>
						<p>Cart (3)</p>
					</div>
					<button>Remove all</button>
				</div>
				{/* CART ITEM */}
				<div>
					<div>
						<img src='/assets/cart/img-xx99-mark-two-headphones.jpg' alt='' />
					</div>
					<div>
						<h2>XX99 MK II</h2>
						<p>$2,999</p>
					</div>
					<NumberInput controlledQty={0} setQty={(num) => num}></NumberInput>
				</div>
				{/* Total and checkout button */}
				<div>
					<p>Total</p>
					<p>$5,396</p>
				</div>
				<button>Checkout</button>
			</div>
		</div>
	)
}
