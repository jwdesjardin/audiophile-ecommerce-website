import Link from 'next/link'
import React from 'react'
import { ImageAsset } from '../../lib/queryTypes'

export const Section1 = ({
	imgs,
	product,
	text,
}: {
	imgs: ImageAsset[]
	product: {
		slug: { type: 'slug'; current: string }
		name: string
	}
	text: string
}) => {
	return (
		<div className='bg-orange-600 rounded-xl content-container flex flex-col lg:flex-row items-center text-center lg:text-left py-[55px] lg:py-[20px] mb-6 md:mb-8 lg:mb-12 background-circles overflow-hidden'>
			{/* Background svg */}

			<div className='max-w-[180px] md:max-w-[197px] lg:max-w-[390px] lg:ml-[120px] mb-8 md:mb-16 transform lg:translate-y-24'>
				<picture>
					<source media='(min-width: 1110px)' srcSet={imgs[2].asset.url} />
					<source media='(min-width: 768px)' srcSet={imgs[1].asset.url} />
					<img src={imgs[0].asset.url} alt='' />
				</picture>
			</div>
			<div className='text-white-100 content-container md:max-w-[350px]'>
				<h2 className='h2 md:h1 mb-6'>{product.name}</h2>
				<p className='mb-6 md:mb-10'>{text}</p>
				<Link href={`/product/${product.slug.current}`} passHref>
					<a>
						<button className='button-four md:mb-2'>See product</button>
					</a>
				</Link>
			</div>
		</div>
	)
}
