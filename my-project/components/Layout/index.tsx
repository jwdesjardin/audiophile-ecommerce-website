import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import BrandInfo from './BrandInfo'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({
	children,
	title = 'Audiophile',
	NavHeader = '',
	brandInfo,
}: {
	children?: ReactNode
	title?: string
	NavHeader?: string
	brandInfo?: boolean
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar header={NavHeader}></Navbar>
			<main>
				{children}
				{brandInfo && <BrandInfo></BrandInfo>}
			</main>
			<Footer></Footer>
		</div>
	)
}

export default Layout
