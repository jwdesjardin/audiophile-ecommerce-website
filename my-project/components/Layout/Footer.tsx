import Link from 'next/link'
import React from 'react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons'

const Footer = () => {
	return (
		<footer className='bg-black-900 text-white-100 '>
			<div className='content-container flex flex-col items-center md:items-start relative'>
				{/* ORANGE BAR DESIGN */}
				<div className='absolute w-[100px] h-1 bg-orange-600 md:left-0'></div>

				<div className='flex flex-col lg:flex-row lg:justify-between items-center md:items-start lg:items-center w-full lg:pt-10'>
					<Logo className='py-12 md:py-8 md:mt-6 lg:mt-0' />
					<NavLinks />
				</div>

				<Text className='py-12 md:py-8 lg:py-0 max-w-2xl lg:max-w-[33.75rem]' />

				<div className='flex flex-col md:flex-row md:justify-between items-center w-full md:mt-12 lg:mt-14'>
					<Copyright className='mb-12' />
					<SocialLinks className='mb-10 transform lg:-translate-y-20' />
				</div>
			</div>
		</footer>
	)
}

const Logo = ({ className = '' }: { className?: string }) => {
	return (
		<div className={'' + ` ${className}`}>
			<img src='/logo.svg' alt='' />
		</div>
	)
}

const Text = ({ className = '' }: { className?: string }) => {
	return (
		<p
			className={
				'text-opacity-40 text-white-100 text-center md:text-left font-extralight tracking-wide' +
				` ${className}`
			}
		>
			Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
			lovers and sound specialists who are devoted to helping you get the most out of personal
			audio. Come and visit our demo facility - we’re open 7 days a week.
		</p>
	)
}

const Copyright = ({ className = '' }: { className?: string }) => {
	return (
		<span className={'text-opacity-40 text-white-100 tracking-wider' + ` ${className}`}>
			Copyright 2021. All Rights Reserved
		</span>
	)
}

const NavLinks = ({ className = '' }: { className?: string }) => {
	const linkHoverEffect = 'hover:text-orange-600 transition'
	return (
		<div
			className={
				'navlink flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8' +
				` ${className}`
			}
		>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>Home</a>
			</Link>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>Headphones</a>
			</Link>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>Speakers</a>
			</Link>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>Earphones</a>
			</Link>
		</div>
	)
}

const SocialLinks = ({ className = '' }: { className?: string }) => {
	const linkHoverEffect = 'hover:text-orange-600 transition'
	return (
		<div className={'flex items-center space-x-4' + ` ${className}`}>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>
					<FacebookIcon></FacebookIcon>
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>
					<TwitterIcon></TwitterIcon>
				</a>
			</Link>
			<Link href='/' passHref>
				<a className={linkHoverEffect}>
					<InstagramIcon></InstagramIcon>
				</a>
			</Link>
		</div>
	)
}

export default Footer
