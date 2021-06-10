import React from 'react'
import NumberInput from '../NumberInput'

export const ProductDetails = ({ product }) => {
	const [qty, setQty] = React.useState(1)
	console.log(product)

	return (
		<div className='content-container'>
			<div className='flex flex-col'>
				<div className='max-w-[540px] mb-8 rounded-xl overflow-hidden'>
					<picture>
						<source media='(min-width: 1110px)' srcSet={product[0].mainImageDesktop.asset.url} />
						<source media='(min-width: 768px)' srcSet={product[0].mainImageTablet.asset.url} />
						<img src={product[0].mainImageMobile.asset.url} alt='' />
					</picture>
				</div>
				<div className='text-left'>
					<span className='overline-text text-orange-600 mb-6 inline-block'>New product</span>
					<h2 className='h4 mb-6'>XX99 Mark II Headphones</h2>
					<p className='mb-6'>
						The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
						premium headphone experience by reproducing the balanced depth and precision of
						studio-quality sound.
					</p>
					<span className='h6 mb-8 inline-block'> $2,999</span>
					<div className='flex flex-row space-x-4'>
						<NumberInput controlledQty={qty} setQty={setQty}></NumberInput>
						<button className='button-one'>Add To Cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}
