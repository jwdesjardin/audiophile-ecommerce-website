import React from 'react'
import Link from 'next/link'
import { ImageAsset } from '../../lib/queryTypes'

export const Section2 = ({
	imgs,
	product,
}: {
	imgs: ImageAsset[]
	product: {
		slug: { type: 'slug'; current: string }
		name: string
	}
}) => {
	return (
		<div className='content-container relative '>
			<div className='h-[320px] flex items-center mb-6 md:mb-8 lg:mb-12'>
				{/* Absolute postioned element that allows for html image loading with dynamic values */}
				<div className='h-[320px] overflow-hidden rounded-lg absolute'>
					<picture>
						<source media='(min-width: 1110px)' srcSet={imgs[2].asset.url} />
						<source media='(min-width: 768px)' srcSet={imgs[1].asset.url} />
						<img src={imgs[0].asset.url} alt='' />
					</picture>
				</div>

				{/* TEXT CONTENT */}
				<div className='flex flex-col ml-6 md:ml-16 lg:ml-24 relative z-10'>
					<h2 className='h4 mb-8'>{product.name}</h2>
					<Link href={`/product/${product.slug.current}`} passHref>
						<a>
							<button className='button-two'>See product</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
