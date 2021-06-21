import React from 'react'
import { CategoryLinks } from './CategoryLinks'

export const Menu = ({ toggleMenuVisible }) => {
	return (
		<div
			onClick={() => {
				toggleMenuVisible(false)
			}}
			className='bg-black-900 bg-opacity-30 fixed h-screen w-full top-0 z-20 lg:hidden'
		>
			<div className='bg-white-100 text-black-900 py-6 md:py-16 rounded-b-lg mt-[96px]'>
				<CategoryLinks></CategoryLinks>
			</div>
		</div>
	)
}
