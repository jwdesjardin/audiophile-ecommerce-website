import Link from 'next/link'
import React from 'react'

export const ProductRecommended = ({ recommended }) => {
	return (
		<section className='mt-[120px] content-container'>
			<h2 className='h5 md:h3 mb-10 text-center'>You may also like</h2>
			<div className='space-y-14 md:space-y-0 md:space-x-4 lg:space-x-8 md:flex md:flex-row'>
				{recommended.map((product) => {
					console.log(product)
					return (
						<Card
							images={[
								product.sharedImageMobile.asset.url,
								product.sharedImageTablet.asset.url,
								product.sharedImageDesktop.asset.url,
							]}
							key={product.slug.current}
							slug={product.slug.current}
							title={product.name}
						/>
					)
				})}
			</div>
		</section>
	)
}

const Card = ({ images, slug, title }: { images: string[]; slug: string; title: string }) => {
	return (
		<div className='flex flex-col items-center justify-between'>
			<div className='rounded-xl overflow-hidden mb-8'>
				<picture>
					<source media='(min-width: 1110px)' srcSet={images[2]} />
					<source media='(min-width: 768px)' srcSet={images[1]} />
					<img src={images[0]} alt='xx59 headphones' />
				</picture>
			</div>
			<h3 className='h5 mb-8 text-center'>{title}</h3>
			<Link href={`/product/${slug}`} passHref>
				<a>
					<button className='button-one'>See Product</button>
				</a>
			</Link>
		</div>
	)
}
