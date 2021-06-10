import Link from 'next/link'
import React from 'react'

export const ProductRecommended = () => {
	return (
		<section className=''>
			<h2 className=''>You may also like</h2>
			<div className=''>
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	)
}

const Card = () => {
	return (
		<div className=''>
			<div className=''>
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
			<h3 className=''>XX59</h3>
			<Link href='/product/xx59-headphones' passHref>
				<a>
					<button className=''>See Product</button>
				</a>
			</Link>
		</div>
	)
}
