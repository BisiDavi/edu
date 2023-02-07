import NFTLayout from "layouts/NFTLayout";
import HomepageHeroBanner from "components/HomepageHeroBanner";
import HomepageDetails from "components/HomepageDetails";

export default function HomePage() {
	return (
		<NFTLayout title="Welcome, start learning, earning NFTs">
			<section className="w-full bg-primary">
				<HomepageHeroBanner />
				<HomepageDetails />
			</section>
		</NFTLayout>
	);
}
