import type { PropsWithChildren } from "react";

import NFTHeader from "layouts/NFTHeader";
import Footer from "layouts/Footer";
import Metatag from "components/Metatag";

interface Props {
	title: string;
	className?: string;
	showFooter?: boolean;
}

export default function NFTLayout({
	title,
	className,
	children,
	showFooter = false,
}: PropsWithChildren<Props>) {
	return (
		<>
			<Metatag title={title} />
			<NFTHeader />
			<main className={className}>{children}</main>
			{showFooter && <Footer />}
		</>
	);
}
