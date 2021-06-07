import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'lyuo2xor',
	dataset: 'production',
	apiVersion: '2021-06-06', // use a UTC date string
	useCdn: true, // `false` if you want to ensure fresh data
})
