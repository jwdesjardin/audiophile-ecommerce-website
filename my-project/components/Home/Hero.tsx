import Link from 'next/link'
import React from 'react'

export const Hero = () => {
	return (
		<div className='hero-bg-image '>
			<div className='content-container flex justify-center lg:justify-start'>
				<div
					className='
			flex flex-col text-center lg:text-left items-center lg:items-start pt-[198px] md:pt-[216px] lg:pt-[225px] text-white-100 md:max-w-[350px]'
				>
					<span className='overline-text inline-block mb-4 md:mb-6 text-black-400'>
						New product
					</span>
					<h1 className='h2 md:h1 mb-6'>XX99 Mark II Headphones</h1>
					<p className='mb-[28px] md:mb-10'>
						Experience natural, lifelike audio and exceptional build quality made for the passionate
						music enthusiast.
					</p>
					<Link href={'/product/xx99-mark-two-headphones'} passHref>
						<a>
							<button className='button-one'>See product</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}
