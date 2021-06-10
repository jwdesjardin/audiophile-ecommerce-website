import Link from 'next/link'
import React from 'react'

export const ProductRecommended = () => {
	return (
		<section className='mt-[120px] content-container'>
			<h2 className='h5 md:h3 mb-10 text-center'>You may also like</h2>
			<div className='space-y-14 md:space-y-0 md:space-x-4 lg:space-x-8 md:flex md:flex-row'>
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	)
}

const Card = () => {
	return (
		<div className='flex flex-col items-center '>
			<div className='rounded-xl overflow-hidden mb-8'>
				<picture>
					<source
						media='(min-width: 1110px)'
						srcSet='/assets/shared/desktop/image-xx59-headphones.jpg'
					/>
					<source
						media='(min-width: 768px)'
						srcSet='/assets/shared/tablet/image-xx59-headphones.jpg'
					/>
					<img src='/assets/shared/mobile/image-xx59-headphones.jpg' alt='xx59 headphones' />
				</picture>
			</div>
			<h3 className='h5 mb-8'>XX59</h3>
			<Link href='/product/xx59-headphones' passHref>
				<a>
					<button className='button-one'>See Product</button>
				</a>
			</Link>
		</div>
	)
}
