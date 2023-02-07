import Link from "next/link";
import { useRouter } from "next/router";

import Button from "components/Button";
import menuContent from "json/menu.json";

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
			<Button className="mx-4 border rounded-full px-6 py-1.5" text="Login" />
		</nav>
	);
}
