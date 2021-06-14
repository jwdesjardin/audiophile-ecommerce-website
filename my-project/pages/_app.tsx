import 'tailwindcss/tailwind.css'
import '../styles/utilities.css'
import { CustomWrapper } from '../context'

function MyApp({ Component, pageProps }) {
	return (
		<CustomWrapper>
			<Component {...pageProps} />
		</CustomWrapper>
	)
}

export default MyApp
