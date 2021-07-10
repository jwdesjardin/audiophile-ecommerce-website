export type SlugArray = { slug: { _type: 'slug'; current: string } }[]
export type ImageAsset = { asset: { url: string } }

export type CategoryProductsAPIData = Omit<
	ProductAPIType,
	'includedItems' | 'recommendations' | 'category'
>

export interface CategoryProductsSanityData {
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

export type ProductPreviewData = CategoryProductsSanityData

export interface ProductSanityType {
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
		slug: { _type: 'slug'; current: string }
		sharedImageMobile: ImageAsset
		sharedImageTablet: ImageAsset
		sharedImageDesktop: ImageAsset
	}[]
	slug: { type: 'slug'; current: string }
}

export interface ApiOrder {
	id: number
	createdAt: string
	updatedAt: string
	subtotal: number
	vaTax: number
	grandTotal: number
	cartItems: {
		id: number
		createdAt: string
		updatedAt: string
		productId: number
		quantity: number
		product: {
			id: number
			createdAt: string
			updatedAt: string
			cartImage: string
			slug: string
			price: number
			name: string
			cartName: string
		}
		orderId?: number
	}[]
	customerInfo: {
		id: number
		createdAt: string
		updatedAt: string
		userID: string
		name: string
		email: string
		phone: string
		address: string
		zip: string
		city: string
		country: string
	}
	paymentMethod: string
	emoneyNumber: string | null
	emoneyPin: string | null
}

export interface ProductAPIType {
	id: number
	createdAt: string
	updatedAt: string
	cartImage: string
	name: string
	cartName: string
	new: boolean
	price: number
	slug: string
	categoryId: number
	category: {
		id: number
		createdAt: string
		updatedAt: string
		name: string
		slug: string
		image: string
	}
	description: string
	features: string
	galleryImageMobile1: string
	galleryImageMobile2: string
	galleryImageMobile3: string
	galleryImageTablet1: string
	galleryImageTablet2: string
	galleryImageTablet3: string
	galleryImageDesktop1: string
	galleryImageDesktop2: string
	galleryImageDesktop3: string
	mainImageMobile: string
	mainImageTablet: string
	mainImageDesktop: string
	recommendations: {
		id: number
		createdAt: string
		updatedAt: string
		name: string
		slug: string
		imageMobile: string
		imageTablet: string
		imageDesktop: string
		productId: number
	}[]
	includedItems: {
		id: number
		createdAt: string
		updatedAt: string
		name: string
		quantity: number
		productId: number
	}[]
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
