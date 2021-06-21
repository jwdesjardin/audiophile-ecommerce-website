export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	fields: [
		{
			name: 'id',
			title: 'Id',
			type: 'number',
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'cartName',
			title: 'Abbreviated Cart Name',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		},

		{
			name: 'mainImageMobile',
			title: 'Main Image Mobile',
			type: 'image',
		},
		{
			name: 'mainImageTablet',
			title: 'Main Image Tablet',
			type: 'image',
		},
		{
			name: 'mainImageDesktop',
			title: 'Main Image Desktop',
			type: 'image',
		},
		{
			name: 'previewImageMobile',
			title: 'Preview Image Mobile',
			type: 'image',
		},
		{
			name: 'previewImageTablet',
			title: 'Preview Image Tablet',
			type: 'image',
		},
		{
			name: 'previewImageDesktop',
			title: 'Preview Image Desktop',
			type: 'image',
		},
		{
			name: 'sharedImageMobile',
			title: 'Shared Image Mobile',
			type: 'image',
		},
		{
			name: 'sharedImageTablet',
			title: 'Shared Image Tablet',
			type: 'image',
		},
		{
			name: 'sharedImageDesktop',
			title: 'Shared Image Desktop',
			type: 'image',
		},
		{
			name: 'cartImage',
			title: 'Cart Image',
			type: 'image',
		},

		{
			name: 'categories',
			title: 'Categories',
			type: 'reference',
			to: { type: 'category' },
		},
		{
			name: 'new',
			title: 'New',
			type: 'boolean',
		},
		{
			name: 'price',
			title: 'Price',
			type: 'number',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'feature',
			title: 'Feature',
			type: 'string',
		},
		{
			name: 'include',
			title: 'Include',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{
							name: 'item',
							title: 'Item',
							type: 'string',
						},
						{
							type: 'number',
							name: 'quantity',
							title: 'Quantity',
						},
					],
				},
			],
		},
		{
			name: 'galleryMobile',
			title: 'Gallery Mobile',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'galleryTablet',
			title: 'Gallery Tablet',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'galleryDesktop',
			title: 'Gallery Desktop',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'recommended',
			title: 'Recommendations',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'product' },
				},
			],
		},
	],

	preview: {
		select: {
			title: 'name',
			media: 'sharedImage',
		},
	},
}
