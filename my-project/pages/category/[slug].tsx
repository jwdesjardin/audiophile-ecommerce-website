import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Layout from '../../components/Layout'
import { getAllCategorySlugs, getProductsByCategory } from '../../lib/query'
import sanityClient from '../../lib/client'
import { ProductPreview } from '../../components/Category/ProductPreview'
import { CategoryLinks } from '../../components/Layout/CategoryLinks'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	const Categories = await sanityClient.fetch(getAllCategorySlugs)

	const paths = Categories.map((category) => ({
		params: { slug: category.slug.current },
	}))

	return { paths, fallback: false }
}

// Uses params to further collect page data
export async function getStaticProps({ params }) {
	const Products = await sanityClient.fetch(getProductsByCategory(params.slug))

	return {
		props: {
			products: Products,
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
