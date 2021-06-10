import React from 'react'

export const ProductGallery = () => {
	return (
		<div className='content-container mt-20 md:flex md:space-x-[20px]'>
			<div>
				<GalleryImage
					mobileImg='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
					tabletImg='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
					desktopImg='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
				/>
				<GalleryImage
					mobileImg='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
					tabletImg='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
					desktopImg='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
				/>
			</div>
			<div>
				<GalleryImage
					mobileImg='/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
					tabletImg='/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
					desktopImg='/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
				/>
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
		<div className='rounded-xl overflow-hidden mb-[20px]'>
			<picture>
				<source media='(min-width: 1110px)' srcSet={desktopImg} />
				<source media='(min-width: 768px)' srcSet={tabletImg} />
				<img src={mobileImg} alt='gallery item 1' />
			</picture>
		</div>
	)
}
