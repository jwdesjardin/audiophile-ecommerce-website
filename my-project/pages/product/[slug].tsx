import React from 'react'
import { InferGetStaticPropsType } from 'next'
import { ProductDetails } from '../../components/Product/ProductDetails'
import Layout from '../../components/Layout'
import { ProductFeatures } from '../../components/Product/ProductFeatures'
import { ProductGallery } from '../../components/Product/ProductGallery'
import { ProductRecommended } from '../../components/Product/ProductRecommended'

import { ProductAPIType, ProductSanityType } from '../../lib/queryTypes'
import { convertAPIProductForProps } from '../../lib/utils'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	// SOLUTION via sanity

	// Local api solution
	const res = await fetch('http://34.145.115.28:5000/product/slugs')
	// const res = await fetch('http://localhost:5000/product/slugs')
	const Products: string[] = await res.json()

	const paths = Products.map((product) => ({
		params: { slug: product },
	}))
	return { paths, fallback: false }
}

// Uses params to further collect page data
export async function getStaticProps({
	params,
}: {
	params: {
		slug: string
	}
}) {
	const res = await fetch(`http://34.145.115.28:5000/product/${params.slug}`)
	// const res = await fetch(`http://localhost:5000/product/${params.slug}`)
	const ProductData: ProductAPIType = await res.json()
	const ProductReadyForProps: ProductSanityType = convertAPIProductForProps(ProductData)

	return {
		props: {
			product: ProductReadyForProps,
		},
	}
}

export default function Project({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [qty, setQty] = React.useState(1)

	const mapGalleryUrls = (images: { asset: { url: string } }[]) => {
		return images.map((img) => {
			return img.asset.url
		})
	}

	const mobileUrls = mapGalleryUrls(product.galleryMobile)
	const tabletUrls = mapGalleryUrls(product.galleryTablet)
	const desktopUrls = mapGalleryUrls(product.galleryDesktop)

	return (
		<Layout brandInfo categoryLinks goBackButton>
			<ProductDetails qty={qty} setQty={setQty} product={product}></ProductDetails>
			<ProductFeatures feature={product.feature} include={product.include}></ProductFeatures>
			<ProductGallery mobile={mobileUrls} tablet={tabletUrls} desktop={desktopUrls} />
			<ProductRecommended recommended={product.recommended} />
		</Layout>
	)
}
