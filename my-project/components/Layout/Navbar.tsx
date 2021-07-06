import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from './ShoppingCart'
import { CartCTX } from '../../context'
import { Menu } from './Menu'

const Navbar = ({
	header,
	colorMode = 'dark',
}: {
	header?: string
	colorMode?: 'dark' | 'transparent'
}) => {
	const linkHoverEffect = 'hover:text-orange-600 transition'

	const { cartVisible, toggleCartVisible } = React.useContext(CartCTX)
	const [menuVisible, toggleMenuVisible] = React.useState(false)

	return (
		<div
			className={`${
				colorMode === 'dark' ? 'bg-black-900' : 'absolute w-full z-20'
			} text-white-100  `}
		>
			<div className='flex items-center justify-between md:justify-start lg:justify-between py-8 content-container'>
				<button
					className='lg:hidden hamburger-button'
					onClick={() => toggleMenuVisible(true)}
				></button>
				<div className='md:ml-10 lg:ml-0'>
					<img src='/logo.svg' alt='' />
				</div>
				<div className='navlink  space-x-10 hidden lg:flex'>
					<Link href='/' passHref>
						<a className={linkHoverEffect}>Home</a>
					</Link>
					<Link href='/category/headphones' passHref>
						<a className={linkHoverEffect}>Headphones</a>
					</Link>
					<Link href='/category/speakers' passHref>
						<a className={linkHoverEffect}>Speakers</a>
					</Link>
					<Link href='/category/earphones' passHref>
						<a className={linkHoverEffect}>Earphones</a>
					</Link>
				</div>
				<div className='md:ml-auto lg:ml-0 flex items-center space-x-2'>
					<button className='user-button'>
						<i className='fas fa-user fa-lg'></i>
					</button>
					<button
						onClick={() => toggleCartVisible(true)}
						className='shopping-cart-button '
					></button>
				</div>
			</div>

			{header && <NavbarHeader header={header} />}
			{menuVisible && <Menu toggleMenuVisible={toggleMenuVisible}></Menu>}
			{cartVisible && <ShoppingCart />}
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
