import Link from 'next/link'
import React from 'react'

export const CategoryLinks = ({ className = '' }: { className?: string }) => {
	return (
		<div
			className={
				'content-container flex flex-col md:flex-row md:space-x-4 lg:space-x-8' + ` ${className}`
			}
		>
			<Card
				imgUrl='/assets/shared/desktop/image-headphones.png'
				title='Headphones'
				slug='headphones'
				extraSpacing
			/>

			<Card
				imgUrl='/assets/shared/desktop/image-speakers.png'
				extraSpacing
				title='Speakers'
				slug='speakers'
			/>
			<Card
				imgUrl='/assets/shared/desktop/image-earphones.png'
				title='Earphones'
				slug='earphones'
			/>
		</div>
	)
}

const Card = ({
	className = '',
	imgUrl,
	title,
	slug,
	extraSpacing = false,
}: {
	className?: string
	imgUrl: string
	title: string
	slug: string
	extraSpacing?: boolean
}) => {
	return (
		<div
			className={
				'flex flex-col items-center bg-white-400 rounded-lg relative mt-14 w-full' + ` ${className}`
			}
		>
			<div
				className={
					'w-[150px] lg:w-[180px] overflow-hidden absolute transform ' +
					`${
						extraSpacing
							? ' -translate-y-12 lg:-translate-y-16'
							: ' -translate-y-10 lg:-translate-y-14'
					}`
				}
			>
				<img src={imgUrl} alt='' />
			</div>
			<h4 className='text-base lg:text-[18px] font-bold tracking-wide uppercase pt-20 lg:pt-28 '>
				{title}
			</h4>
			<Link href={`/category/${slug}`}>
				<button className='button-three mb-4'>Shop</button>
			</Link>
		</div>
	)
}
