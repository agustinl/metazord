import Card from "./Card";

const GoogleCard = ({ data }) => {
	return (
		<Card>
			<div className="flex flex-col items-start w-full">
				<div className="card-header flex items-center w-full p-1 block rounded-md mb-2">
					<img src="https://img.icons8.com/color/28/000000/google-logo.png" alt="Google"/>

					<h2 className="text-lg font-medium mx-3 mr-4">
						Google
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<div className="w-full google-card">
					<a
						href={data.url}
						target="_blank"
						rel="noreferrer"
						className="text-tiny text-gray-800">
						{`https://${data.urlToShow}`}
					</a>
					<h3 className="text-xl hover:underline">
						<a
							href={data.url}
							target="_blank"
							rel="noreferrer"
							className="text-blue-900">
							{ data.title }
						</a>
					</h3>
					<p className="text-tiny text-gray-800">
						{ data.description }
					</p>
				</div>
			</div>
		</Card>
	);
};

export default GoogleCard;
