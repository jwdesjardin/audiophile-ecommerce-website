import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'

const Layout = ({
	children,
	title = 'Audiophile',
}: {
	children?: ReactNode
	title?: string
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>

			<main>{children}</main>
		</div>
	)
}

export default Layout
