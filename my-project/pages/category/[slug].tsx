import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { ProductPreview } from '../../components/Category/ProductPreview'
import { CategoryProductsAPIData, CategoryProductsSanityData } from '../../lib/queryTypes'
import { convertAPICategoryProductsForProps } from '../../lib/utils'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	const res = await fetch('http://34.145.30.225:5000/category/slugs')
	const Categories: string[] = await res.json()

	const paths = Categories.map((category) => ({
		params: { slug: category },
	}))

	return { paths, fallback: false }
}

// Uses params to further collect page data
export async function getStaticProps({ params }) {
	const res = await fetch(`http://34.145.30.225:5000/category/${params.slug}`)
	const Products: CategoryProductsAPIData[] = await res.json()

	const ProductsReadyForProps: CategoryProductsSanityData[] =
		convertAPICategoryProductsForProps(Products)

	return {
		props: {
			products: ProductsReadyForProps,
			title: params.slug.toUpperCase(),
		},
	}
}

export default function Project({
	products,
	title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout NavHeader={title} brandInfo categoryLinks>
			<div className='mb-16 md:mb-28 lg:mb-40'>
				{products &&
					products.map((product, idx) => (
						<ProductPreview key={idx} product={product} flexReverse={idx % 2 === 0} />
					))}
			</div>
		</Layout>
	)
}
