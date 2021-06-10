import React from 'react'

export const ProductFeatures = ({ product }) => {
	return (
		<div className='content-container mt-20 md:mt-[120px] lg:mt-[160px] lg:flex lg:flex-row lg:space-x-32 '>
			<div className='lg:max-w-[640px]'>
				<h2 className='h5 md:h3 mb-6 md:mb-8'>Features</h2>
				<p className='mb-6'>
					Featuring a genuine leather head strap and premium earcups, these headphones deliver
					superior comfort for those who like to enjoy endless listening. It includes intuitive
					controls designed for any situation. Whether you’re taking a business call or just in your
					own personal space, the auto on/off and pause features ensure that you’ll never miss a
					beat.
				</p>
				<p className='mb-6'>
					The advanced Active Noise Cancellation with built-in equalizer allow you to experience
					your audio world on your terms. It lets you enjoy your audio in peace, but quickly
					interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant
					connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior
					sound, cutting-edge technology, and a modern design aesthetic.
				</p>
			</div>
			<div className='mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0'>
				<h2 className='h5 md:h3 mb-6 md:mb-8 '>In the box</h2>
				<ul>
					<li className='mb-2'>
						<span className='text-orange-600 font-bold tracking-wide mr-6'>1x</span> Headphone Unit
					</li>
					<li className='mb-2'>
						<span className='text-orange-600 font-bold tracking-wide mr-6'>2x</span> Replacement
						earcups
					</li>
					<li className='mb-2'>
						<span className='text-orange-600 font-bold tracking-wide mr-6'>1x</span> User manual
					</li>
					<li className='mb-2'>
						<span className='text-orange-600 font-bold tracking-wide mr-6'>1x</span> 3.5mm 5m audio
						cable
					</li>
					<li className='mb-2'>
						<span className='text-orange-600 font-bold tracking-wide mr-6'>1x</span> Travel bag
					</li>
				</ul>
			</div>
		</div>
	)
}
