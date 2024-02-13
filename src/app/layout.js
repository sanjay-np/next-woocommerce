import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/style.scss';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Next13NProgress } from 'nextjs13-progress';

export const metadata = {
	title: 'CGS Mart',
	description: 'Shopping Store',
}
export default async function RootLayout({ children }) {
	// const sessionToken = await getSessionToken()
	return (
		<html lang="en">
			<body className='page-body'>
				<MantineProvider>
					<Notifications position="top-right" zIndex={1000} />
					
							<div className='page-wrapper'>{children}</div>
							<Footer />
							<Next13NProgress color="#C96" height={3} />
					
				</MantineProvider>
			</body>
		</html >
	)
}
