import Button from "components/Button";
import NFTLayout from "layouts/NFTLayout";
import homeContent from "json/home.json";
import FeatureCategory from "components/FeatureCategory";
import HomepageHeroBanner from "components/HomepageHeroBanner";

// homepage

export default function HomePage() {
	return (
		<NFTLayout title="Welcome, start learning, earning NFTs">
			<section className="w-full bg-primary">
				<HomepageHeroBanner />
				<div className="h-8 border-banner-gradient w-full"></div>
				<div className="content bg-white py-8">
					<div className="container">
						<h2 className="mt-4 mb-2 font-lora text-primary ">
							{homeContent.main.question}
						</h2>
						<p className="mt-2 mb-8 text-primary font-dmsans">
							{homeContent.main.answer}
						</p>
						<FeatureCategory category="students" />
						<FeatureCategory category="teachers" />
					</div>
				</div>
			</section>
		</NFTLayout>
	);
}
