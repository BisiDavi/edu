import Link from "next/link";

import menuContent from "json/menu.json";
import { useRouter } from "next/router";

export default function Menu() {
	const router = useRouter();
	const activeStyle = {
		padding: "8px",
		borderBottom: "3px solid black",
	};

	return (
		<nav className="flex items-center">
			<ul className="flex space-x-6">
				{menuContent.map((item) => {
					const styles = router.asPath.includes(item.link) ? activeStyle : {};
					return (
						<li key={item.text}>
							<Link href={item.link} style={styles}>
								{item.text}
							</Link>
						</li>
					);
				})}
			</ul>
			{/* <img src="/images/dino-icons.png" alt="dino-icon" className="w-8" /> */}
		</nav>
	);
}
