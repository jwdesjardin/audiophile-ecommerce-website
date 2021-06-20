import 'tailwindcss/tailwind.css'
import '../styles/utilities.css'
import { CartWrapper, OrderWrapper } from '../context'
import React from 'react'

function MyApp({ Component, pageProps }) {
	return (
		<OrderWrapper>
			<CartWrapper>
				<Component {...pageProps} />
			</CartWrapper>
		</OrderWrapper>
	)
}

export default MyApp
