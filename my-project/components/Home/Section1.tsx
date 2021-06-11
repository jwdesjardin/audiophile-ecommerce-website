import React from 'react'

export const Section1 = () => {
	return (
		<div className='bg-orange-600 rounded-xl content-container flex flex-col items-center text-center py-[55px] mb-6'>
			{/* Background svg */}

			<div className='max-w-[180px] mb-8'>
				<picture>
					<source media='(min-width: 1110px)' srcSet='/assets/home/desktop/image-speaker-zx9.png' />
					<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-speaker-zx9.png' />
					<img src='/assets/home/mobile/image-speaker-zx9.png' alt='' />
				</picture>
			</div>
			<div className='text-white-100 content-container'>
				<h2 className='h2 mb-6'>ZX9 speaker</h2>
				<p className='mb-6'>
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<button className='button-four'>See product</button>
			</div>
		</div>
	)
}
