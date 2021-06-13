import React from 'react'

export const Section1 = () => {
	return (
		<div className='bg-orange-600 rounded-xl content-container flex flex-col lg:flex-row items-center text-center lg:text-left py-[55px] lg:py-[20px] mb-6 background-circles overflow-hidden'>
			{/* Background svg */}

			<div className='max-w-[180px] md:max-w-[197px] lg:max-w-[390px] lg:ml-[120px] mb-8 md:mb-16 transform lg:translate-y-24'>
				<picture>
					<source media='(min-width: 1110px)' srcSet='/assets/home/desktop/image-speaker-zx9.png' />
					<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-speaker-zx9.png' />
					<img src='/assets/home/mobile/image-speaker-zx9.png' alt='' />
				</picture>
			</div>
			<div className='text-white-100 content-container md:max-w-[350px]'>
				<h2 className='h2 md:h1 mb-6'>ZX9 speaker</h2>
				<p className='mb-6 md:mb-10'>
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<button className='button-four md:mb-2'>See product</button>
			</div>
		</div>
	)
}
