import Card from "./Card";

const Slack = ({ data }) => {
	return (
		<Card>
			<div className="flex flex-col items-start w-full">
				<div className="flex items-center w-full p-1 block rounded-md mb-2">
					<img src="https://img.icons8.com/color/28/000000/slack-new.png" alt="Google"/>

					<h2 className="text-lg font-medium mx-3 mr-4">
						Slack
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<div className="w-full border-l-4 pl-3">
                    <div className="flex items-center mb-1">
                        <img
                            src={data.favicon}
                            alt="Favicon"
                            className="max-h-5"
                        />
                        {
                            data.og_site_name ? <p className="text-tiny ml-1">{data.og_site_name}</p> : null
                        }
                        
                    </div>
					<h3 className="text-sm font-semibold">
						<a
							href={data.url}
                            target="_blank"
                            rel="noreferrer" 
							className="text-blue-900">
							{ data.title }
						</a>
					</h3>
					<p className="text-tiny text-gray-900 mt-1 mb-2">
						{ data.description }
					</p>
                    <div>
                        {data.image ? (
                            <div className="h-56">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="object-cover rounded-md h-56 border border-gray-200"
                                />
                            </div>
                        ) : (
                            <div className="py-10 w-6/12 rounded-md border border-gray-200">
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
                    </div>
				</div>
			</div>
		</Card>
	);
};

export default Slack;
