import Head from 'next/head'
import sanityClient from '../lib/client'
import { getProductsByCategory } from '../lib/query'
import React from 'react'

export default function Home() {
	// React.useEffect(() => {
	// 	const myFetch = async () => {
	// 		const data = await sanityClient.fetch(getProductsByCategory)
	// 		console.log(data)
	// 		return data
	// 	}
	// 	myFetch()
	// }, [])

	const [radio1, setRadio1] = React.useState(false)
	const [qty, setQty] = React.useState(1)

	console.log(radio1)
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
				<div className='flex flex-col text-input'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' className='' placeholder='Insert your name' />
				</div>
				<div className='mb-10'></div>

				{/* SOLUTION #1	 */}
				{/* <div
					className={radio1 ? 'radio-input ring-orange-600' : 'radio-input'}
					onClick={() => setRadio1(!radio1)}
					role='checkbox'
					aria-checked={radio1}
				>
					<div className={radio1 ? 'radio-button radio-checked' : 'radio-button'}></div>
					<p className='radio-label'>e-Money</p>
				</div> */}

				{/* SOLUTION #2 */}
				<div
					className={`ring-1 ${
						radio1 ? 'ring-orange-600' : 'ring-black-200'
					} rounded-lg py-3 px-6 w-[309px] hover:ring-orange-600 focus:ring-orange-600 outline-none focus:ring-2 `}
					onClick={() => setRadio1(!radio1)}
					onFocus={() => {}}
					tabIndex={0}
					onChange={(e) => {
						console.log(e.type)
					}}
					onKeyUp={(e) => {
						console.log(e.code)
						if (e.code === 'Space') {
							setRadio1(!radio1)
						}
					}}
				>
					<input
						type='radio'
						className='border-black-200 text-orange-600 bg-white-200 focus:ring-orange-600 focus:ring-opacity-0'
						checked={radio1}
						onChange={(e) => console.log(e.type)}
						tabIndex={-1}
					/>
					<label className='ml-4 text-sm font-bold'>e-Money</label>
				</div>

				<div className='mb-10'></div>

				<input type='number' className='' />

				<div role='slider' aria-valuenow={qty}>
					<button onClick={() => setQty(qty - 1)}>-</button>
					<span>{qty}</span>
					<button onClick={() => setQty(qty + 1)}>+</button>
				</div>
			</main>
		</div>
	)
}
