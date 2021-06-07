import Head from 'next/head'
import sanityClient from '../lib/client'
import { getProductsByCategory } from '../lib/query'
import React from 'react'

export default function Home() {
	React.useEffect(() => {
		const myFetch = async () => {
			const data = await sanityClient.fetch(getProductsByCategory)
			console.log(data)
			return data
		}
		myFetch()
	}, [])

	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>Index</main>
		</div>
	)
}
