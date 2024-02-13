
export const metadata = {
	title: 'CGS Mart',
	description: 'Shopping Store',
}
export default async function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='page-body'>
			<div className='page-wrapper'>{children}</div>
			</body>
		</html >
	)
}
