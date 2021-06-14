import React from 'react'
import NumberInput from '../NumberInput'

export const ProductDetails = ({
	qty,
	setQty,
	mainImage,
	isNew = false,
	title,
	description,
	price,
	slug,
}: {
	qty: number
	setQty: React.Dispatch<React.SetStateAction<number>>
	mainImage: string[]
	isNew?: boolean
	title: string
	description: string
	price: number
	slug: string
}) => {
	return (
		<div className='content-container'>
			<div className='flex flex-col md:flex-row md:space-x-20 lg:space-x-32 md:items-center'>
				<div className='max-w-[540px] md:w-[281px] lg:w-auto mb-8 rounded-xl overflow-hidden flex-shrink-0'>
					<picture>
						<source media='(min-width: 1110px)' srcSet={mainImage[2]} />
						<source media='(min-width: 768px)' srcSet={mainImage[1]} />
						<img src={mainImage[0]} alt='' />
					</picture>
				</div>
				<div className='text-left'>
					{isNew && (
						<span className='overline-text text-orange-600 mb-6 inline-block'>New product</span>
					)}
					<h2 className='h4 md:h3 lg:h2 mb-6'>{title}</h2>
					<p className='mb-6'>{description}</p>
					<span className='h6 mb-8 inline-block'>${price}</span>
					<div className='flex flex-row space-x-4'>
						<div className='w-[120px]'>
							<NumberInput controlledQty={qty} setQty={setQty}></NumberInput>
						</div>

						<button className='button-one'>Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}
