export type SlugArray = { slug: { _type: 'slug'; current: string } }[]
export type ImageAsset = { asset: { url: string } }

export interface ProductPreviewData {
	id: number
	slug: { _type: 'slug'; current: string }
	name: string
	categories: { title: string }
	description: string
	new: boolean
	previewImageMobile: ImageAsset
	previewImageTablet: ImageAsset
	previewImageDesktop: ImageAsset
}

export interface Product {
	cartImage: ImageAsset
	categories: { title: string }
	description: string
	feature: string
	galleryMobile: ImageAsset[]
	galleryTablet: ImageAsset[]
	galleryDesktop: ImageAsset[]
	id: number
	include: { item: string; quantity: number }[]
	mainImageMobile: ImageAsset
	mainImageTablet: ImageAsset
	mainImageDesktop: ImageAsset
	name: string
	cartName: string
	new: boolean
	price: number
	recommended: {
		name: string
		slug: string
		sharedImageMobile: ImageAsset
		sharedImageTablet: ImageAsset
		sharedImageDesktop: ImageAsset
	}[]
	slug: { type: 'slug'; current: string }
}

export interface ProductCartData {
	cartImage: ImageAsset
	slug: { type: 'slug'; current: string }
	price: number
	name: string
	cartName: string
}

export interface HomeData {
	heroImage: ImageAsset[]
	section1Image: ImageAsset[]
	section2Image: ImageAsset[]
	section3Image: ImageAsset[]
	heroText: string
	section1Text: string
	homeProduct: {
		slug: { type: 'slug'; current: string }
		name: string
	}
	section1Product: {
		slug: { type: 'slug'; current: string }
		name: string
	}
	section2Product: {
		slug: { type: 'slug'; current: string }
		name: string
	}
	section3Product: {
		slug: { type: 'slug'; current: string }
		name: string
	}
}
