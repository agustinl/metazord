import Card from "./Card";

const LinkedIn = ({ data }) => {
	return (
		<Card>
			<div>
				<div className="card-header">
					{/* <img src="https://img.icons8.com/fluency/28/000000/linkedin.png" alt="LinkedIn Logo" /> */}
					<img src="/icons/linkedin.svg" alt="LinkedIn Logo" width="28" height="28" />

					<h2>LinkedIn</h2>

					<hr />
				</div>

				<a href={data.url} className="linkedin-card">
					{data.image ? (
						<div>
							<img
								src={data.image}
								alt="Site Image Preview"
							/>
						</div>
					) : (
						<div className="no-image">
							<svg
								xmlns="http://www.w3.org/2000/svg"
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
					<div className="linkedin-card-info">
						<h3>{data.title}</h3>      
						<p>{data.urlToShow} • X min to read</p>
						{/* <p className="text-xs text-gray-500">{data.description}</p> */}
					</div>
				</a>
			</div>
		</Card>
	);
};

export default LinkedIn;
