import Head from 'next/head'
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
}: {
	children?: ReactNode
	title?: string
	NavHeader?: string
	brandInfo?: boolean
	navColorMode?: 'dark' | 'transparent'
	categoryLinks?: boolean
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar header={NavHeader} colorMode={navColorMode}></Navbar>
			<main>
				{children}
				{categoryLinks && <CategoryLinks></CategoryLinks>}
				{brandInfo && <BrandInfo></BrandInfo>}
			</main>
			<Footer></Footer>
		</div>
	)
}

export default Layout
