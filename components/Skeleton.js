import Card from "./Card";

const Skeleton = () => {
	return (
		<Card>
			<div className="flex flex-col items-start">
				<div className="flex items-center w-full p-1 block rounded-md mb-2">
                    <div className="rounded-full bg-gray-200 h-8 w-8 animate-pulse"></div>

					<h2 className="text-lg font-medium mx-3 mr-4">
						Loading
					</h2>

					<hr
						className="flex-grow"
					/>
				</div>

				<div className="w-full rounded-lg animate-pulse">
                    <div className="bg-gray-200 h-72 w-full rounded-md">
                        <div className="h-72 w-full"></div>
					</div>

					<div className="pt-2 pb-3">
						<div className="w-8/12 h-6 bg-gray-200 rounded-sm"></div>
						<div className="w-full h-10 bg-gray-200 my-2 rounded-sm"></div>
						<div className="w-6/12 h-4 bg-gray-200 rounded-sm"></div>
					</div>
				</div>
			</div>

			<div className="flex items-center mt-3 animate-pulse">
                <div className="bg-gray-200 rounded-md h-36 w-5/12"></div>

				<div className="flex justify-center flex-col h-36 px-4 w-3/5">
					<div className="w-8/12 h-6 bg-gray-200 rounded-sm"></div>
					<div className="w-full h-10 bg-gray-200 my-2 rounded-sm"></div>
					<div className="w-6/12 h-4 bg-gray-200 rounded-sm"></div>
				</div>
			</div>
		</Card>
	);
};

export default Skeleton;
