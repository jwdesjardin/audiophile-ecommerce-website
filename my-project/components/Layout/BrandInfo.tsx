import React from 'react'

const BrandInfo = () => {
	return (
		<div className='flex flex-col items-center content-container mb-[120px] lg:mb-[200px] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between '>
			<div className='rounded-lg overflow-hidden max-w-[327px] md:max-w-[689px]  mb-10 md:mb-16 '>
				<picture>
					<source media='(min-width: 1110px)' srcSet='/image-best-gear.jpg' />
					<source media='(min-width: 768px)' srcSet='/image-best-gear-tablet.jpg' />
					<img src='/image-best-gear-mobile.jpg' alt='person listening to music' />
				</picture>
			</div>
			<div className='text-center max-w-xl lg:max-w-md lg:text-left'>
				<h2 className='h4 md:h2 mb-8'>
					Bringing you the <span className='text-orange-600'>best</span> audio gear
				</h2>
				<p className='font-extralight tracking-wide'>
					Located at the heart of New York City, Audiophile is the premier store for high end
					headphones, earphones, speakers, and audio accessories. We have a large showroom and
					luxury demonstration rooms available for you to browse and experience a wide range of our
					products. Stop by our store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>
		</div>
	)
}

export default BrandInfo
