import React from 'react'
import { InferGetStaticPropsType } from 'next'

import sanityClient from '../../lib/client'
import { getAllProductSlugs, getOneProject } from '../../lib/query'

import { ProductDetails } from '../../components/Product/ProductDetails'
import Layout from '../../components/Layout'
import { ProductFeatures } from '../../components/Product/ProductFeatures'
import { ProductGallery } from '../../components/Product/ProductGallery'
import { ProductRecommended } from '../../components/Product/ProductRecommended'

import { useRouter } from 'next/router'
import { Product, SlugArray } from '../../lib/queryTypes'

// Returns paths - an array of abjects containing params
export async function getStaticPaths() {
	const Products: SlugArray = await sanityClient.fetch(getAllProductSlugs)

	const paths = Products.map((product) => ({
		params: { slug: product.slug.current },
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
	const ProductData: Product[] = await sanityClient.fetch(getOneProject(params.slug))

	return {
		props: {
			product: ProductData[0],
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

	const router = useRouter()

	return (
		<Layout brandInfo categoryLinks>
			<div className='text-black-400 content-container mt-4 md:mt-8 lg:mt-20 mb-6 lg:mb-14'>
				<a>
					<button onClick={() => router.back()}>GoBack</button>
				</a>
			</div>
			<ProductDetails
				qty={qty}
				setQty={setQty}
				mainImage={[
					product.mainImageMobile.asset.url,
					product.mainImageTablet.asset.url,
					product.mainImageDesktop.asset.url,
				]}
				isNew={product.new}
				title={product.name}
				description={product.description}
				slug={product.slug.current}
				price={product.price}
			></ProductDetails>
			<ProductFeatures feature={product.feature} include={product.include}></ProductFeatures>
			<ProductGallery mobile={mobileUrls} tablet={tabletUrls} desktop={desktopUrls} />
			<ProductRecommended recommended={product.recommended} />
		</Layout>
	)
}
