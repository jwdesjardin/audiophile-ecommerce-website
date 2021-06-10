import React from 'react'

export const ProductGallery = ({
	mobile,
	tablet,
	desktop,
}: {
	mobile: string[]
	tablet: string[]
	desktop: string[]
}) => {
	return (
		<div className='content-container mt-20 md:flex md:space-x-[20px] lg:space-x-8 '>
			<div className='md:space-y-[20px] lg:space-y-8'>
				<GalleryImage mobileImg={mobile[0]} tabletImg={tablet[0]} desktopImg={desktop[0]} />
				<GalleryImage mobileImg={mobile[1]} tabletImg={tablet[1]} desktopImg={desktop[1]} />
			</div>
			<div>
				<GalleryImage mobileImg={mobile[2]} tabletImg={tablet[2]} desktopImg={desktop[2]} />
			</div>
		</div>
	)
}

const GalleryImage = ({
	mobileImg,
	tabletImg,
	desktopImg,
}: {
	mobileImg: string
	tabletImg: string
	desktopImg: string
}) => {
	return (
		<div className='rounded-xl overflow-hidden mb-[20px] md:mb-0'>
			<picture>
				<source media='(min-width: 1110px)' srcSet={desktopImg} />
				<source media='(min-width: 768px)' srcSet={tabletImg} />
				<img src={mobileImg} alt='gallery item 1' />
			</picture>
		</div>
	)
}
