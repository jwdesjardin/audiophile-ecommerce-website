import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement, ReactNode } from 'react'
import BrandInfo from './BrandInfo'
import { CategoryLinks } from './CategoryLinks'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({
	children,
	title = 'Audiophile',
	NavHeader = '',
	navColorMode = 'dark',
	brandInfo,
	categoryLinks,
	goBackButton,
}: {
	children?: ReactNode
	title?: string
	NavHeader?: string
	brandInfo?: boolean
	navColorMode?: 'dark' | 'transparent'
	categoryLinks?: boolean
	goBackButton?: boolean
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar header={NavHeader} colorMode={navColorMode}></Navbar>
			<main>
				{goBackButton && <GoBackButton />}
				{children}
				{categoryLinks && <CategoryLinks></CategoryLinks>}
				{brandInfo && <BrandInfo></BrandInfo>}
			</main>
			<Footer></Footer>
		</div>
	)
}

const GoBackButton = () => {
	const router = useRouter()
	return (
		<div className='text-black-400 content-container mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14'>
			<a>
				<button onClick={() => router.back()}>GoBack</button>
			</a>
		</div>
	)
}

export default Layout
