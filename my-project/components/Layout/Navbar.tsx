import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from './ShoppingCart'

const Navbar = ({
	header,
	colorMode = 'dark',
}: {
	header?: string
	colorMode?: 'dark' | 'transparent'
}) => {
	const linkHoverEffect = 'hover:text-orange-600 transition'
	const [shoppingCartModal, setShoppingCartModal] = React.useState(false)

	return (
		<div
			className={`${
				colorMode === 'dark' ? 'bg-black-900' : 'absolute w-full z-20'
			} text-white-100  `}
		>
			<div className='flex items-center justify-between md:justify-start lg:justify-between py-8 content-container'>
				<button className='lg:hidden hamburger-button'></button>
				<div className='md:ml-10 lg:ml-0'>
					<img src='/logo.svg' alt='' />
				</div>
				<div className='navlink  space-x-10 hidden lg:flex'>
					<Link href='/' passHref>
						<a className={linkHoverEffect}>Home</a>
					</Link>
					<Link href='/headphones' passHref>
						<a className={linkHoverEffect}>Headphones</a>
					</Link>
					<Link href='/speakers' passHref>
						<a className={linkHoverEffect}>Speakers</a>
					</Link>
					<Link href='/earphones' passHref>
						<a className={linkHoverEffect}>Earphones</a>
					</Link>
				</div>
				<button
					onClick={() => setShoppingCartModal(!shoppingCartModal)}
					className='shopping-cart-button md:ml-auto lg:ml-0 '
				></button>
			</div>

			{header && <NavbarHeader header={header} />}
			{shoppingCartModal && <ShoppingCart setShoppingCartModal={setShoppingCartModal} />}
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
