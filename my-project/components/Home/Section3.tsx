import Link from 'next/link'
import React from 'react'
import { ImageAsset } from '../../lib/queryTypes'

export const Section3 = ({
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
		<div className='content-container md:flex md:mb-20 lg:mb-[180px] '>
			<div className='overflow-hidden rounded-lg mb-6'>
				<picture>
					<source media='(min-width: 1110px)' srcSet={imgs[2].asset.url} />
					<source media='(min-width: 768px)' srcSet={imgs[1].asset.url} />
					<img src={imgs[0].asset.url} alt='' />
				</picture>
			</div>
			<div className='bg-white-400 h-[200px] flex flex-col justify-center rounded-lg mb-6  md:w-1/2 flex-shrink-0 md:ml-4 lg:ml-8 md:h-auto'>
				<div className='ml-6 md:ml-10 lg:ml-24'>
					<h2 className='h4 mb-6 max-w-sm'>{product.name}</h2>
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
