import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div>
				<img src='/logo.svg' alt='' />
			</div>

			<div>
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

			<p>
				Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
				lovers and sound specialists who are devoted to helping you get the most out of personal
				audio. Come and visit our demo facility - we’re open 7 days a week.
			</p>

			<span>Copyright 2021. All Rights Reserved</span>

			<div>
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
		</footer>
	)
}

export default Footer
