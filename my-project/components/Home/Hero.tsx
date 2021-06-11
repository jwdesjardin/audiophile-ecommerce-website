import Link from 'next/link'
import React from 'react'

export const Hero = () => {
	return (
		<div className=' hero-bg-image '>
			{/* <div className='absolute overflow-hidden h-[600px]'>
				<div className='transform -translate-y-20'>
					<picture>
						<source media='(min-width: 1110px)' srcSet='/assets/home/desktop/image-header.jpg' />
						<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-header.jpg' />
						<img src='/assets/home/mobile/image-header.jpg' alt='' />
					</picture>
				</div>
			</div> */}

			{/* CSS IMAGE IN BACKGROUND */}
			<div className='flex flex-col text-center items-center py-[120px] md:pt-[126px] md:pb-[167px] text-white-100 relative z-20 content-container'>
				<span className='overline-text inline-block mb-4 text-black-400'>New product</span>
				<h1 className='h2 mb-6'>XX99 Mark II Headphones</h1>
				<p className='mb-[28px]'>
					Experience natural, lifelike audio and exceptional build quality made for the passionate
					music enthusiast.
				</p>
				<Link href={'/'} passHref>
					<a>
						<button className='button-one'>See product</button>
					</a>
				</Link>
			</div>
		</div>
	)
}
