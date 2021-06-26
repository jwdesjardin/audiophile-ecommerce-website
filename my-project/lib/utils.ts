import {
	CategoryProductsAPIData,
	CategoryProductsSanityData,
	ProductAPIType,
	ProductSanityType,
} from './queryTypes'

export function convertAPIProductForProps(product: ProductAPIType): ProductSanityType {
	return {
		cartImage: { asset: { url: product.cartImage } },
		categories: { title: product.category.name },
		description: product.description,
		feature: product.features,
		galleryMobile: [
			{ asset: { url: product.galleryImageMobile1 } },
			{ asset: { url: product.galleryImageMobile2 } },
			{ asset: { url: product.galleryImageMobile3 } },
		],
		galleryTablet: [
			{ asset: { url: product.galleryImageTablet1 } },
			{ asset: { url: product.galleryImageTablet2 } },
			{ asset: { url: product.galleryImageTablet3 } },
		],
		galleryDesktop: [
			{ asset: { url: product.galleryImageDesktop1 } },
			{ asset: { url: product.galleryImageDesktop2 } },
			{ asset: { url: product.galleryImageDesktop3 } },
		],
		id: product.id,
		include: product.includedItems.map((item) => ({ item: item.name, quantity: item.quantity })),
		mainImageMobile: { asset: { url: product.mainImageMobile } },
		mainImageTablet: { asset: { url: product.mainImageTablet } },
		mainImageDesktop: { asset: { url: product.mainImageDesktop } },
		name: product.name,
		cartName: product.cartName,
		new: product.new,
		price: product.price,
		recommended: product.recommendations.map((item) => ({
			name: item.name,
			slug: { _type: 'slug', current: item.slug },
			sharedImageMobile: { asset: { url: item.imageMobile } },
			sharedImageTablet: { asset: { url: item.imageTablet } },
			sharedImageDesktop: { asset: { url: item.imageDesktop } },
		})),
		slug: { type: 'slug', current: product.slug },
	}
}

export function convertAPICategoryProductsForProps(
	products: CategoryProductsAPIData[]
): CategoryProductsSanityData[] {
	return products.map((p) => ({
		id: p.id,
		slug: { _type: 'slug', current: p.slug },
		name: p.name,
		// i dont have the data here with out indcluding the category in my query and changing the type
		categories: { title: '' },
		description: p.description,
		new: p.new,
		// should have added the preview menu to the this object
		previewImageMobile: { asset: { url: p.mainImageMobile } },
		previewImageTablet: { asset: { url: p.mainImageTablet } },
		previewImageDesktop: { asset: { url: p.mainImageDesktop } },
	}))
}
