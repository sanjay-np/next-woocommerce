
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
	const content = await getHomePageContent();
	const trendingProducts = await fetchProducts(4, '', 'featured: true');
	const onSaleProducts = await fetchProducts(4, '', 'onSale: true');
	const recommendedProducts = await fetchProducts(8, '', 'orderby: {field: DATE, order: ASC }');

	return (
		<main className="main min-h-screen">
			<div className="homepage">
				<div className="hero-slider">
					<HeroSlider items={content?.banner} />
				</div>
				<div className="categories-section">
					<Categories items={content?.categories} />
				</div>
				<div className="offer-section">
					<Banner />
				</div>
				<div className="trending-section">
					<Trending trendingProducts={trendingProducts?.edges} onSaleProducts={onSaleProducts?.edges} />
				</div>
				<div className="recommended-section">
					<Recomended products={recommendedProducts?.edges} />
				</div>
				<div className="icon-box-section">
					<IconBox />
				</div>
			</div>
		</main>
	);
}