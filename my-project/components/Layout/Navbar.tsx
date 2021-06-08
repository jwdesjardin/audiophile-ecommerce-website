import React from 'react'
import Link from 'next/link'

const Navbar = ({ header }: { header?: string }) => {
	return (
		<div className='bg-black-900 text-white-100  '>
			<div className='flex items-center justify-between md:justify-start lg:justify-between py-8 content-container'>
				<button className='lg:hidden hamburger-button'></button>
				<div className='md:ml-10 lg:ml-0'>
					<img src='/logo.svg' alt='' />
				</div>
				<div className='text-xs uppercase leading-[1.5625rem] tracking-[.0625rem]  space-x-10 hidden lg:flex'>
					<Link href='/' passHref>
						<a>Home</a>
					</Link>
					<Link href='/headphones' passHref>
						<a>Headphones</a>
					</Link>
					<Link href='/speakers' passHref>
						<a>Speakers</a>
					</Link>
					<Link href='/earphones' passHref>
						<a>Earphones</a>
					</Link>
				</div>
				<button className='shopping-cart-button md:ml-auto lg:ml-0 '></button>
			</div>

			{header && <NavbarHeader header={header} />}
		</div>
	)
}

const NavbarHeader = ({ header }: { header: string }) => {
	return (
		<div className='flex justify-center py-8 md:py-24  border-t border-white-200 border-opacity-20 content-container'>
			<h1 className='h4 md:h2'>{header}</h1>
		</div>
	)
}

export default Navbar
