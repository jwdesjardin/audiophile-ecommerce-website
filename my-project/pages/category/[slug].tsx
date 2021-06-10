import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { getAllCategorySlugs, getProductsByCategory } from '../../lib/query'
import sanityClient from '../../lib/client'
import ProductPreview from '../../components/Category/ProductPreview'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	const Categories = await sanityClient.fetch(getAllCategorySlugs)

	const paths = Categories.map((category) => ({
		params: { slug: category.slug.current },
	}))

	console.log(paths)
	return { paths, fallback: false }
}

// Uses params to further collect page data
export async function getStaticProps({ params }) {
	console.log(params)
	const Products = await sanityClient.fetch(getProductsByCategory(params.slug))
	console.log(Products)

	return {
		props: {
			products: Products,
		},
	}
}

export default function Project({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(products)
	return (
		<Layout>
			{products &&
				products.map((product, idx) => (
					<ProductPreview key={idx} product={product} flexReverse={idx % 2 === 0} />
				))}
		</Layout>
	)
}
