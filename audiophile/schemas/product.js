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
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
		},

		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'sharedImage',
			title: 'Shared Image',
			type: 'image',
			options: {
				hotspot: true,
			},
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
			name: 'gallery',
			title: 'Gallery',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
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
