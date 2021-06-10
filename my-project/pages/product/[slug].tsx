import React from 'react'
import { InferGetStaticPropsType } from 'next'

import sanityClient from '../../lib/client'
import { getAllProductSlugs, getOneProject } from '../../lib/query'

import { ProductDetails } from '../../components/Product/ProductDetails'
import Layout from '../../components/Layout'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	const Products = await sanityClient.fetch(getAllProductSlugs)

	const paths = Products.map((product) => ({
		params: { slug: product.slug.current },
	}))
	return { paths, fallback: false }
}

// Uses params to further collect page data
export async function getStaticProps({ params }) {
	const Product = await sanityClient.fetch(getOneProject(params.slug))

	return {
		props: {
			product: Product,
		},
	}
}

export default function Project({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log(product)
	return (
		<Layout brandInfo categoryLinks>
			<ProductDetails product={product}></ProductDetails>
		</Layout>
	)
}
