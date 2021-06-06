export default {
	name: 'accessory',
	title: 'Accessory',
	type: 'document',
	fields: [
		{
			name: 'item',
			title: 'Item',
			type: 'string',
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
	],
}
