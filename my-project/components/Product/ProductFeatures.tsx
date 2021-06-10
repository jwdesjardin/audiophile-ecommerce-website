import React from 'react'

export const ProductFeatures = ({
	feature,
	include,
}: {
	feature: string
	include: { item: string; quantity: number }[]
}) => {
	const features = feature.split('\\n\\n')
	return (
		<div className='content-container mt-20 md:mt-[96px] lg:mt-[140px] lg:flex lg:flex-row lg:space-x-32 '>
			<div className='lg:max-w-[640px]'>
				<h2 className='h5 md:h3 mb-6 md:mb-8'>Features</h2>
				{features.map((text, idx) => (
					<p key={idx} className='mb-6'>
						{text}
					</p>
				))}
			</div>
			<div className='mt-24 md:mt-28 lg:mt-0 md:flex md:flex-row lg:flex-col md:space-x-40 lg:space-x-0'>
				<h2 className='h5 md:h3 mb-6 md:mb-8 '>In the box</h2>
				<ul>
					{include.map((obj) => (
						<li key={obj.item} className='mb-2'>
							<span className='text-orange-600 font-bold tracking-wide mr-6'>{obj.quantity}x</span>{' '}
							{obj.item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
