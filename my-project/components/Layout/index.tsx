import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import Navbar from './Navbar'

const Layout = ({
	children,
	title = 'Audiophile',
	NavHeader = '',
}: {
	children?: ReactNode
	title?: string
	NavHeader?: string
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar header={NavHeader}></Navbar>
			<main>{children}</main>
		</div>
	)
}

export default Layout
