import Head from 'next/head'
import sanityClient from '../lib/client'
import { getProductsByCategory } from '../lib/query'
import React from 'react'
import NumberInput from '../components/NumberInput'
import RadioInput from '../components/RadioInput'
import TextInput from '../components/TextInput'
import RadioGroup from '../components/RadioInput'

export default function Home() {
	// React.useEffect(() => {
	// 	const myFetch = async () => {
	// 		const data = await sanityClient.fetch(getProductsByCategory)
	// 		console.log(data)
	// 		return data
	// 	}
	// 	myFetch()
	// }, [])

	const [qty, setQty] = React.useState(1)
	const [text, setText] = React.useState('')
	const [radio, setRadio] = React.useState<string | null>(null)

	console.log(qty, text, radio)

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-6'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<p className='subtitle'>Index</p>
				<p className='overline-text'>Index</p>

				<h1 className='h1'>Morbi interdum mollis sapien</h1>
				<div className='mb-10'></div>
				<h1 className='h2'>Donec nec justo eget felis facilisis</h1>
				<div className='mb-10'></div>
				<h1 className='h3'>Nunc sem lacus accum</h1>
				<div className='mb-10'></div>
				<h1 className='h4'>interdum consectetuer</h1>
				<div className='mb-10'></div>
				<h1 className='h5'>nascetur ridiculus mus</h1>
				<div className='mb-10'></div>
				<h1 className='h6'>natoque penatibus et</h1>

				<p className='h1 mt-10'>Buttons</p>
				<div className='mb-10'></div>
				<button className='button-one'>See Product</button>
				<div className='mb-10'></div>
				<button className='button-two'>See Product</button>
				<div className='mb-10'></div>
				<button className='button-three'>Shop</button>

				<p className='h1 mt-10'>Forms</p>
				<div className='mb-10'></div>

				<TextInput controlledText={text} setText={setText}></TextInput>

				<div className='mb-10'></div>

				<RadioGroup
					title='Pick 1'
					values={['one', 'two', 'three']}
					controlledState={radio}
					setRadio={setRadio}
				></RadioGroup>

				<div className='mb-10'></div>

				<NumberInput controlledQty={qty} setQty={setQty}></NumberInput>

				<div className='mb-10'></div>
			</main>
		</div>
	)
}