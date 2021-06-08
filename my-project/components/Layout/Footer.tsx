import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-black-900 text-white-100 '>
			<div className='content-container flex flex-col items-center'>
				<Logo className='py-12' />

				<NavLinks />

				<Text className='py-12' />

				<Copyright className='mb-12' />

				<SocialLinks className='mb-10' />
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
				'text-opacity-40 text-white-100 text-center font-extralight tracking-wide' + ` ${className}`
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
		<span className={'text-opacity-40 text-white-100' + ` ${className}`}>
			Copyright 2021. All Rights Reserved
		</span>
	)
}

const NavLinks = ({ className = '' }: { className?: string }) => {
	return (
		<div className={'navlink flex flex-col items-center space-y-4' + ` ${className}`}>
			<Link href='/' passHref>
				<a>Home</a>
			</Link>
			<Link href='/' passHref>
				<a>Headphones</a>
			</Link>
			<Link href='/' passHref>
				<a>Speakers</a>
			</Link>
			<Link href='/' passHref>
				<a>Earphones</a>
			</Link>
		</div>
	)
}
const SocialLinks = ({ className = '' }: { className?: string }) => {
	return (
		<div className={'flex items-center space-x-4' + ` ${className}`}>
			<Link href='' passHref>
				<a>
					<img src='/icon-facebook.svg' alt='icon logo' />
				</a>
			</Link>
			<Link href='' passHref>
				<a>
					<img src='/icon-twitter.svg' alt='twitter logo' />
				</a>
			</Link>
			<Link href='' passHref>
				<a>
					<img src='/icon-instagram.svg' alt='instagram logo' />
				</a>
			</Link>
		</div>
	)
}

export default Footer
