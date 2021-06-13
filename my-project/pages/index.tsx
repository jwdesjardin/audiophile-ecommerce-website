import React from 'react'
import { ProductPreview } from '../components/Category/ProductPreview'
import Layout from '../components/Layout'
import { getHomeContent } from '../lib/query'
import { HomeData } from '../lib/queryTypes'
import sanityClient from '../lib/client'
import { InferGetStaticPropsType } from 'next'
import { Hero } from '../components/Home/Hero'
import { CategoryLinks } from '../components/Layout/CategoryLinks'
import { Section1 } from '../components/Home/Section1'
import { Section2 } from '../components/Home/Section2'
import { Section3 } from '../components/Home/Section3'

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
		<Layout brandInfo navColorMode='transparent'>
			<Hero />
			<CategoryLinks></CategoryLinks>
			<Section1></Section1>
			<Section2></Section2>
			<Section3></Section3>
		</Layout>
	)
}
