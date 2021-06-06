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
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
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
							type: 'reference',
							to: { type: 'accessory' },
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
			title: 'title',
			media: 'image',
		},
	},
}
