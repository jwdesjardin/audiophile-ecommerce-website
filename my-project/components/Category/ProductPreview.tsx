import React from 'react'

const ProductPreview = () => {
	return (
		<>
			<div className='content-container mt-16 md:mt-28 lg:mt-40 flex flex-col items-center lg:justify-between lg:flex-row'>
				<Image className='mb-8 md:mb-12 ' />
				<TextContent className=''></TextContent>
			</div>
			<div className='content-container mt-16 md:mt-28 lg:mt-40 flex flex-col items-center lg:justify-between lg:flex-row-reverse'>
				<Image className='mb-8 md:mb-12' />
				<TextContent className=''></TextContent>
			</div>
		</>
	)
}

const Image = ({ className = '' }: { className?: string }) => {
	return (
		<div className={'rounded-lg overflow-hidden max-w-[540px]' + ` ${className}`}>
			<picture>
				<source
					media='(min-width: 1110px)'
					srcSet='/assets/category-headphones/desktop/image-xx59.jpg'
				/>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/category-headphones/tablet/image-xx59.jpg'
				/>
				<img src='/assets/category-headphones/mobile/image-xx59.jpg' alt='xx59 headphones' />
			</picture>
		</div>
	)
}

const TextContent = ({ className = '' }: { className?: string }) => {
	return (
		<div
			className={
				'flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-[445px]' +
				` ${className}`
			}
		>
			<span className='overline-text text-orange-600 mb-6 md:mb-4'>New product</span>
			<h2 className='h4 md:h2 mb-6 md:mb-8 max-w-md'>XX99 Mark II Headphones</h2>
			<p className='body-text mb-6'>
				The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium
				headphone experience by reproducing the balanced depth and precision of studio-quality
				sound.
			</p>
			<button className='button-one'>See product</button>
		</div>
	)
}

export default ProductPreview
