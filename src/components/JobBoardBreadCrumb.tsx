import Link from "next/link";

interface Props {
	company: string;
}

export default function JobBoardBreadCrumb({ company }: Props) {
	return (
		<ul className="breadcrumb flex items-center bg-white pl-4 pr-10 py-1.5 shadow rounded ">
			<li>
				<Link href="/job-board" className="hover:text-secondary">
					Job board
				</Link>
			</li>
			<span className="text-3xl mx-2 -mt-7"> ˲ </span>{" "}
			<li className="font-bold">{company}</li>
		</ul>
	);
}
