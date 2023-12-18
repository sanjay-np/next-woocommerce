import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Header from '@/components/partails/Header';
import Footer from '@/components/partails/Footer';
import '@mantine/core/styles.css';
import '@/styles/style.scss'

export const metadata = {
	title: 'CGS Mart',
	description: 'Shopping Store',
}
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<Header />
					<div className='page-wrapper'>
						{children}
					</div>
					<Footer />
				</MantineProvider>
			</body>
		</html >
	)
}
