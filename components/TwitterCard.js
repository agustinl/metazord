import Card from "./Card";

const TwitterCard = ({ data }) => {
	return (
		<Card>
			<div className="flex flex-col items-start">
				<div className="flex items-center w-full p-1 block rounded-md mb-2">
					<img src="https://img.icons8.com/color/28/000000/twitter--v1.png" alt="Twitter" />
					
					<h2 className="text-lg font-medium mx-3 mr-4">
						Twitter
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<a href={data.url} className="w-full rounded-full twitter-card">
					{data.twitter_image ? (
						<div className="h-72 w-full rounded-t-full">
							<img
								src={data.twitter_image}
								alt={data.title}
								className="object-cover rounded-t-full h-72 w-full"
							/>
						</div>
					) : (
						<div className="py-10 rounded-t-full">
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
								<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
								<line x1="8" y1="8" x2="12" y2="8" />
								<line x1="8" y1="12" x2="12" y2="12" />
								<line x1="8" y1="16" x2="12" y2="16" />
							</svg>
						</div>
					)}

					<div className="rounded-b-lg border-t p-3 w-full text-sm">
						<h3 className="mt-1">{data.twitter_title ? data.twitter_title : data.og_title}</h3>
						{data.twitter_description ? (
							<p className="my-1 leading-5">{data.twitter_description}</p>
						) : <p className="my-1 leading-5">{data.og_description}</p>}
						<div className="flex items-center">
							<svg
								height="21"
								viewBox="0 0 21 21"
								width="21"
								xmlns="http://www.w3.org/2000/svg">
								<g
									fill="none"
									fillRule="evenodd"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									transform="translate(4 4)">
									<path d="m5.5 7.5c.96940983 1.36718798 3.01111566 1.12727011 4.01111565 0l1.98888435-2c1.1243486-1.22807966 1.1641276-2.81388365 0-4-1.135619-1.15706921-2.86438099-1.15706947-4 0l-2 2" />
									<path d="m7.5 6.56977319c-.96940983-1.36718798-3-1.1970433-4-.06977319l-2 1.97487373c-1.12434863 1.22807966-1.16412758 2.83900987 0 4.02512627 1.13561901 1.1570692 2.86438099 1.1570695 4 0l2-2" />
								</g>
							</svg>
							<p>{data.urlToShow}</p>
						</div>
					</div>
				</a>
			</div>

			<a
				href={data.url}
				className="flex items-center w-full mt-3 rounded-full twitter-card">
				<div className="rounded-l-full h-auto w-1/4 flex items-center">
					{data.twitter_image ? (
						<div className="h-32 w-full rounded-l-full">
							<img
								src={data.twitter_image}
								alt={data.title}
								className="object-cover rounded-l-full h-32 w-full"
							/>
						</div>
					) : (
						<div className="flex items-center justify-center h-32 w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className=""
								width="28"
								height="28"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#536471"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
								<line x1="8" y1="8" x2="12" y2="8" />
								<line x1="8" y1="12" x2="12" y2="12" />
								<line x1="8" y1="16" x2="12" y2="16" />
							</svg>
						</div>
					)}
				</div>

				<div className="flex justify-center flex-col rounded-r-full border-l h-32 px-4 w-3/4 text-sm">
					<h3 className="mt-1">{data.twitter_title ? data.twitter_title : data.og_title}</h3>
						{data.twitter_description ? (
							<p className="my-1 leading-5">{data.twitter_description}</p>
						) : <p className="my-1 leading-5">{data.og_description}</p>}
					<div className="flex items-center">
						<svg
							height="21"
							viewBox="0 0 21 21"
							width="21"
							xmlns="http://www.w3.org/2000/svg">
							<g
								fill="none"
								fillRule="evenodd"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								transform="translate(4 4)">
								<path d="m5.5 7.5c.96940983 1.36718798 3.01111566 1.12727011 4.01111565 0l1.98888435-2c1.1243486-1.22807966 1.1641276-2.81388365 0-4-1.135619-1.15706921-2.86438099-1.15706947-4 0l-2 2" />
								<path d="m7.5 6.56977319c-.96940983-1.36718798-3-1.1970433-4-.06977319l-2 1.97487373c-1.12434863 1.22807966-1.16412758 2.83900987 0 4.02512627 1.13561901 1.1570692 2.86438099 1.1570695 4 0l2-2" />
							</g>
						</svg>
						<p>{data.urlToShow}</p>
					</div>
				</div>
			</a>
		</Card>
	);
};

export default TwitterCard;
