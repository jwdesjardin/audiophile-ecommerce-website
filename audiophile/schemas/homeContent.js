export default {
	name: 'homeContent',
	title: 'Home Content',
	type: 'document',
	fields: [
		{
			name: 'heroImage',
			title: 'Hero Image',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'heroProduct',
			title: 'Hero Product',
			type: 'reference',
			to: { type: 'product' },
		},
		{
			name: 'heroText',
			title: 'Hero Text',
			type: 'string',
		},
		{
			name: 'section1Image',
			title: 'Section 1 Image',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'section1Product',
			title: 'Section 1 Product',
			type: 'reference',
			to: { type: 'product' },
		},
		{
			name: 'section1Text',
			title: 'Section 1 Text',
			type: 'string',
		},
		{
			name: 'section2Image',
			title: 'Section 2 Image',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'section2Product',
			title: 'Section 2 Product',
			type: 'reference',
			to: { type: 'product' },
		},
		{
			name: 'section3Image',
			title: 'Section 3 Image',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			name: 'section3Product',
			title: 'Section 3 Product',
			type: 'reference',
			to: { type: 'product' },
		},
	],
}
