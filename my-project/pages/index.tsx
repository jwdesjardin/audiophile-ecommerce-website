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
				>
					<div className={radio1 ? 'radio-button radio-checked' : 'radio-button'}></div>
					<p className='radio-label'>e-Money</p>
					<input type='radio' className='appearance-none' />
				</div> */}

				{/* SOLUTION #2 */}
				<div
					className={`ring-1 ${
						radio1 ? 'ring-orange-600' : 'ring-black-200'
					} rounded-lg py-3 px-6 w-[309px] hover:ring-orange-600`}
					onClick={() => setRadio1(!radio1)}
				>
					<input
						type='radio'
						className='border-black-200 text-orange-600 bg-white-200'
						checked={radio1}
						onClick={() => setRadio1(!radio1)}
					/>
					<label className='ml-4 text-sm font-bold'>e-Money</label>
				</div>

				<div className='mb-10'></div>
			</main>
		</div>
	)
}
