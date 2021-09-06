import Card from "./Card";

const LinkedIn = ({ data }) => {
	return (
		<Card width="w-full">
			<div className="flex flex-col items-start">
				<div className="flex items-center w-full p-1 block rounded-md mb-2">
					<img src="https://img.icons8.com/fluency/28/000000/linkedin.png" alt="LinkedIn" />

					<h2 className="text-lg font-medium mx-3 mr-3">
						LinkedIn
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<a href={data.url} className="w-full rounded-lg linkedin-card">
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
					<div className="rounded-b-lg px-3 py-2 border-t">
						<h3 className="text-tiny font-medium mb-2">
							{data.og_title}
						</h3>
						<div className="flex items-center text-xs text-gray-500">                            
						    <p>{data.urlToShow}</p>
                            <p className="ml-1">• X min to read</p>
                        </div>
					</div>
				</a>
			</div>
		</Card>
	);
};

export default LinkedIn;
