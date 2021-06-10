export const getOneProject = (slug: string) => {
	return `*[_type == "product" && slug.current == "${slug}"] {
  id, 
  name, 
  slug, 
  mainImageMobile{
  	asset->{
  		url
		}
	},
  mainImageTablet{
  	asset->{
  		url
		}
	},
  mainImageDesktop{
  	asset->{
  		url
		}
	},
  cartImage{
  	asset->{
  		url
		}
	},
  categories->{
    title
  },
  new,
  price,
  description,
  feature,
    include[]{
      quantity,
      item
    },
  galleryMobile[]{
    asset->{
    url
  }
  },
  galleryTablet[]{
    asset->{
    url
  }
  },
  galleryDesktop[]{
    asset->{
    url
  }
  },
  recommended[]->{
    name, 
    slug, 
    sharedImageMobile{
      asset->{
        url
      }
    },
    sharedImageTablet{
      asset->{
        url
      }
    },
    sharedImageDesktop{
      asset->{
        url
      }
    },
  }
}`
}
type ImageAsset = { asset: { url: string } }
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

export const getProductsByCategory = (slug: string) => {
	return `*[_type == "product" && categories->slug.current == "${slug}" ] {
    id,
    slug,
    name, 
    categories->{
      title
    },
    new, 
    description,
    previewImageMobile{
      asset->{
        url
      }
    },
    previewImageTablet{
      asset->{
        url
      }
    },
    previewImageDesktop{
      asset->{
        url
      }
    },
  }
  `
}
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

// QUERY
export const getAllProductSlugs = `*[_type == "product"  ] {
  slug
}`
//RETURN TYPE
export type SlugArray = { slug: { _type: 'slug'; current: string } }[]

export const getAllCategorySlugs = `*[_type == "category"  ] {
  slug, 
  _id
}`
// RETURNS SLUG ARRAY
