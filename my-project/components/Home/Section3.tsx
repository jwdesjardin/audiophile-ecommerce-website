import React from 'react'

export const Section3 = () => {
	return (
		<div className='content-container md:flex md:mb-20 lg:mb-[180px] '>
			<div className='overflow-hidden rounded-lg mb-6'>
				<picture>
					<source
						media='(min-width: 1110px)'
						srcSet='/assets/home/desktop/image-earphones-yx1.jpg'
					/>
					<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-earphones-yx1.jpg' />
					<img src='/assets/home/mobile/image-earphones-yx1.jpg' alt='' />
				</picture>
			</div>
			<div className='bg-white-400 h-[200px] flex flex-col justify-center rounded-lg mb-6  md:w-1/2 flex-shrink-0 md:ml-4 lg:ml-8 md:h-auto'>
				<div className='ml-6 md:ml-10 lg:ml-24'>
					<h2 className='h4 mb-6'>YX1 earphones</h2>
					<button className='button-two'>See product</button>
				</div>
			</div>
		</div>
	)
}
