import React from 'react'
import Link from 'next/link'

export const Section2 = () => {
	return (
		<div className='section2-bg-image content-container rounded-lg flex items-center mb-6 md:mb-8 lg:mb-12'>
			<div className='flex flex-col ml-6 md:ml-16 lg:ml-24'>
				<h2 className='h4 mb-8'>ZX7 speaker</h2>
				<Link href={`/`} passHref>
					<a>
						<button className='button-two'>See product</button>
					</a>
				</Link>
			</div>
		</div>
	)
}
