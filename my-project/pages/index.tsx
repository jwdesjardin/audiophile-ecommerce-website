import React from 'react'
import { ProductPreview } from '../components/Category/ProductPreview'
import Layout from '../components/Layout'
import { getHomeContent } from '../lib/query'
import { HomeData } from '../lib/queryTypes'
import sanityClient from '../lib/client'
import { InferGetStaticPropsType } from 'next'
import { Hero } from '../components/Home/Hero'

export async function getStaticProps() {
	const data: HomeData = await sanityClient.fetch(getHomeContent)

	return {
		props: {
			data,
		},
	}
}

export default function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout brandInfo categoryLinks>
			<Hero />
		</Layout>
	)
}
