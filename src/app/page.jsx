import Banner from "@/components/page/homepage/Banner"
import Categories from "@/components/page/homepage/Categories"
import HeroSlider from "@/components/page/homepage/HeroSlider"
import IconBox from "@/components/page/homepage/IconBox"
import Recomended from "@/components/page/homepage/Recomended"
import Trending from "@/components/page/homepage/Trending"
import { getHomePageContent } from "@/query/homepage"
import { fetchProducts } from "@/query/products"



/**
 * This function is the main page component of the homepage. It fetches the content from the CMS and
 * the products from the API and displays them on the page.
 * @returns {JSX.Element} The homepage component
 */
export default async function Page() {
	
	return (
		<main className="main min-h-screen">
			
		</main>
	);
}