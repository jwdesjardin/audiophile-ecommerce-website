import Link from 'next/link'
import React from 'react'

export const Hero = () => {
	return (
		<div className=''>
			{/* CSS IMAGE IN BACKGROUND */}
			<div className=''>
				<span className=''> New product</span>
				<h1 className=''>XX99 Mark II Headphones</h1>
				<p className=''>
					Experience natural, lifelike audio and exceptional build quality made for the passionate
					music enthusiast.
				</p>
				<Link href={'/'} passHref>
					<a>
						<button className=''>See product</button>
					</a>
				</Link>
			</div>
		</div>
	)
}
