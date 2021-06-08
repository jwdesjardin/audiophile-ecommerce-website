import React from 'react'

const BrandInfo = () => {
	return (
		<div className='flex flex-col items-center content-container my-[120px] lg:my-[200px] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between '>
			<div className='rounded-lg overflow-hidden h-[300px] w-[327px] md:w-[689px] lg:w-[540px] lg:h-[588px] mb-10 md:mb-16 '>
				<img
					src='/image-best-gear.jpg'
					alt=''
					className='transform -translate-y-6  scale-110 md:hidden lg:block'
				/>
				<img
					src='/image-best-gear-tablet.jpg'
					alt=''
					className='transform -translate-y-6  scale-110 hidden md:block lg:hidden'
				/>
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
