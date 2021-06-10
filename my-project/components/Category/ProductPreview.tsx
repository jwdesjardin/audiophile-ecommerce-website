import Link from 'next/link'
import React from 'react'

export const ProductPreview = ({
	flexReverse = true,
	product,
}: {
	flexReverse?: boolean
	product
}) => {
	return (
		<div
			className={
				'content-container mt-16 md:mt-28 lg:mt-40 flex flex-col items-center lg:justify-between' +
				`${flexReverse ? ' lg:flex-row-reverse' : ' lg:flex-row'}`
			}
		>
			<Image
				className='mb-8 md:mb-12'
				mobileImage={product.previewImageMobile.asset.url}
				tabletImage={product.previewImageTablet.asset.url}
				desktopImage={product.previewImageDesktop.asset.url}
			/>
			<TextContent
				isNew={product.new}
				title={product.name}
				description={product.description}
				slug={product.slug.current}
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
