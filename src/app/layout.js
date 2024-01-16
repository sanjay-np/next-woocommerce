import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@/styles/style.scss';
import Header from '@/components/header/Header';
import { getSessionToken } from '@/query/session';
import Footer from '@/components/footer/Footer';
import { Next13NProgress } from 'nextjs13-progress';
import { fetchProductCategories } from '@/query/products';
import StoreProvider from '@/store/providers/StoreProvider';
import ThemeProvider from '@/store/providers/ThemeProvider';

export const metadata = {
	title: 'CGS Mart',
	description: 'Shopping Store',
}
export default async function RootLayout({ children }) {
	// const sessionToken = await getSessionToken()
	const categoryMenu = await fetchProductCategories(7)
	return (
		<html lang="en">
			<body className='page-body'>
				<MantineProvider>
					<StoreProvider>
						<ThemeProvider>
							<Header categories={categoryMenu} />
							<div className='page-wrapper'>{children}</div>
							<Footer />
							<Next13NProgress color="#C96" height={3} />
						</ThemeProvider>
					</StoreProvider>
				</MantineProvider>
			</body>
		</html >
	)
}
