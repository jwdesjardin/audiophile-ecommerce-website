export const getOneProject = `*[_type == "product" && slug.current == 'yx1-wireless-earphones'] {
  id, 
  name, 
  slug, 
  mainImage{
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
  gallery[]{
    asset->{
    url
  }
  },
  recommended[]->{
    name, 
    slug, 
    sharedImage{
      asset->{
        url
      }
    }
  }
}`

export const getAllProjects = ``
