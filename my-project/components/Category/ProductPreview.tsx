import Link from 'next/link'
import React from 'react'

const ProductPreview = ({ flexReverse = true }: { flexReverse?: boolean }) => {
	return (
		<div
			className={
				'content-container mt-16 md:mt-28 lg:mt-40 flex flex-col items-center lg:justify-between' +
				`${flexReverse ? ' lg:flex-row-reverse' : ' lg:flex-row'}`
			}
		>
			<Image className='mb-8 md:mb-12' mobileImage='' tabletImage='' desktopImage='' />
			<TextContent
				className=''
				isNew={true}
				title='XX59 Headphones'
				description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium 
  headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
				slug='xx59-headphones'
			></TextContent>
		</div>
	)
}

const Image = ({
	className = '',
	mobileImage,
	tabletImage,
	desktopImage,
}: {
	className?: string
	mobileImage: string
	tabletImage: string
	desktopImage: string
}) => {
	return (
		<div className={'rounded-lg overflow-hidden max-w-[540px]' + ` ${className}`}>
			<picture>
				<source media='(min-width: 1110px)' srcSet={desktopImage} />
				<source media='(min-width: 768px)' srcSet={tabletImage} />
				<img src={mobileImage} alt='xx59 headphones' />
			</picture>
		</div>
	)
}

const TextContent = ({
	className = '',
	isNew,
	title,
	description,
	slug,
}: {
	className?: string
	isNew: boolean
	title: string
	description: string
	slug: string
}) => {
	return (
		<div
			className={
				'flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl lg:max-w-[445px]' +
				` ${className}`
			}
		>
			{isNew && <span className='overline-text text-orange-600 mb-6 md:mb-4'>New product</span>}
			<h2 className='h4 md:h2 mb-6 md:mb-8 max-w-md'>{title}</h2>
			<p className='body-text mb-6'>{description}</p>
			<Link href={`/product/${slug}`} passHref>
				<a>
					<button className='button-one'>See product</button>
				</a>
			</Link>
		</div>
	)
}

export default ProductPreview
