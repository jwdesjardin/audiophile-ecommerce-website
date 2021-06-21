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
	console.log(data)
	return (
		<Layout brandInfo navColorMode='transparent'>
			<Hero />
			<CategoryLinks className='my-[120px] lg:my-[200px]'></CategoryLinks>

			<Section1
				imgs={data.section1Image}
				product={data.section1Product}
				text={data.section1Text}
			></Section1>
			<Section2 imgs={data.section2Image} product={data.section2Product}></Section2>
			<Section3 imgs={data.section3Image} product={data.section3Product}></Section3>
		</Layout>
	)
}
