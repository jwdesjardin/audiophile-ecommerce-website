import React from 'react'

const ProductPreview = () => {
	return (
		<div className=''>
			<div className=''>
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
			<div className=''>
				<span className=''>New product</span>
				<h2 className=''>XX99 Mark II Headphones</h2>
				<p className=''>
					The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
					premium headphone experience by reproducing the balanced depth and precision of
					studio-quality sound.
				</p>
				<button className=''>See product</button>
			</div>
		</div>
	)
}

export default ProductPreview
