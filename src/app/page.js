import Banner from "@/components/homepage/Banner";
import Categories from "@/components/homepage/Categories";
import HeroSlider from "@/components/homepage/HeroSlider";
import IconBox from "@/components/homepage/IconBox";
import Recomended from "@/components/homepage/Recomended";
import Trending from "@/components/homepage/Trending";

export default function Page() {
	return (
		<main className="main min-h-screen">
			<div className="homepage">
				<HeroSlider />
				<Categories />
				<Banner />
				<Trending />
				<Recomended />
				<IconBox />
			</div>
		</main>
	)
}
