import 'tailwindcss/tailwind.css'
import '../styles/utilities.css'
import { CartWrapper, OrderWrapper, UserWrapper } from '../context'
import React from 'react'

function MyApp({ Component, pageProps }) {
	return (
		<UserWrapper>
			<OrderWrapper>
				<CartWrapper>
					<Component {...pageProps} />
				</CartWrapper>
			</OrderWrapper>
		</UserWrapper>
	)
}

export default MyApp
