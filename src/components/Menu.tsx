import Link from "next/link";

import menuContent from "json/menu.json";

export default function Menu() {
	const activeStyle = {
		padding: "8px",
		borderBottom: "3px solid black",
	};

	return (
		<nav className="flex items-center">
			<ul className="flex space-x-6">
				{menuContent.map((item) => (
					<li key={item.text}>
						<Link
							href={item.link}
							// style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
			{/* <img src="/images/dino-icons.png" alt="dino-icon" className="w-8" /> */}
		</nav>
	);
}
