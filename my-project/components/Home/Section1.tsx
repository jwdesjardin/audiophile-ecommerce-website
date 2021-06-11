import React from 'react'

export const Section1 = () => {
	return (
		<div>
			<div>
				<picture>
					<source media='(min-width: 1110px)' srcSet='/assets/home/desktop/image-speaker-zx9.jpg' />
					<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-speaker-zx9.jpg' />
					<img src='/assets/home/mobile/image-speaker-zx9.jpg' alt='' />
				</picture>
			</div>
			<div>
				<h2>ZX9 speaker</h2>
				<p>
					Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
				</p>
				<button>See product</button>
			</div>
		</div>
	)
}
