import Card from "./Card";

const FacebookCard = ({ data }) => {
	return (
		<Card>
			<div className="flex flex-col items-start">
				<div className="flex items-center w-full p-1 block rounded-md mb-2">
					<img src="https://img.icons8.com/fluency/28/000000/facebook-new.png" alt="Facebook" />

					<h2 className="text-lg font-medium mx-3 mr-4">
						Facebook
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<a href={data.url} className="w-full rounded-lg facebook-card">
					{data.og_image ? (
						<div className="h-72 w-full rounded-t-lg">
							<img
								src={data.og_image}
								alt={data.title}
								className="object-cover rounded-t-lg h-72 w-full"
							/>
						</div>
					) : (
						<div className="py-10 rounded-t-lg w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-full"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#536471"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/>
								<line x1="3" y1="3" x2="21" y2="21" />
								<line x1="15" y1="8" x2="15.01" y2="8" />
								<path d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" />
								<path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" />
								<path d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" />
							</svg>
						</div>
					)}
					<div className="rounded-b-lg pt-2 pb-3 px-4 border-t">
						<p className="uppercase text-xs">{data.urlToShow}</p>
						<h3 className="text-lg font-medium -mb-1">
							{data.og_title}
						</h3>
						{data.og_description ? (
							<p className="text-base">{data.og_description}</p>
						) : null}
					</div>
				</a>
			</div>

			<a
				href={data.url}
				className="flex items-center mt-3 rounded-lg facebook-card">
				{data.og_image ? (
					<div className="h-36 w-2/5 rounded-l-lg">
						<img
							src={data.og_image}
							alt={data.title}
							className="object-cover rounded-l-lg h-36 w-full"
						/>
					</div>
				) : (
					<div className="rounded-l-lg h-36 flex items-center w-2/5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-full"
							width="28"
							height="28"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="#536471"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<line x1="3" y1="3" x2="21" y2="21" />
							<line x1="15" y1="8" x2="15.01" y2="8" />
							<path d="M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9" />
							<path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5" />
							<path d="M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2" />
						</svg>
					</div>
				)}

				<div className="flex justify-center flex-col h-36 rounded-r-lg px-4 w-3/5 border-l">
					<p className="uppercase text-xs">{data.urlToShow}</p>
					<h3 className="font-medium text-sm mt-1 leading-5">
						{data.og_title}
					</h3>
					{data.og_description ? (
						<p className="text-sm leading-5">
							{data.og_description}
						</p>
					) : null}
				</div>
			</a>
		</Card>
	);
};

export default FacebookCard;
