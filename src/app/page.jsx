
import Banner from "@/components/page/homepage/Banner"
import Categories from "@/components/page/homepage/Categories"
import HeroSlider from "@/components/page/homepage/HeroSlider"
import IconBox from "@/components/page/homepage/IconBox"
import Recomended from "@/components/page/homepage/Recomended"
import Trending from "@/components/page/homepage/Trending"
import { getHomePageContent } from "@/query/homepage"
import { fetchProducts } from "@/query/products"



export default async function Page() {
	const content = await getHomePageContent()
	const products = await fetchProducts(4,'DESC')
	const recommendedProducts = await fetchProducts(8, 'ASC')

	return (
		<main className="main min-h-screen">
			<div className="homepage">
				<div className="hero-slider">
					<HeroSlider items={content?.banner}/>
				</div>
				<div className="categories-section">
					<Categories items={content?.categories}/>
				</div>
				<div className="offer-section">
					<Banner/>
				</div>
				<div className="trending-section">
					<Trending products={products}/>
				</div>
				<div className="recommended-section">
					<Recomended products={recommendedProducts}/>
				</div>
				<div className="icon-box-section">
					<IconBox/>
				</div>
			</div>
		</main>
	)
}