import Card from "./Card";

const Skeleton = () => {
	return (
		<Card>
			<div className="skeleton-card">
				<div className="card-header">
                    <div className="animate-pulse skeleton-logo"></div>

					<h2> Loading </h2>

					<hr />
				</div>

				<div>
					<div className="h-72 animate-pulse"></div>

					<div>
						<div className="h-6 animate-pulse"></div>
						<div className="h-10 animate-pulse"></div>
						<div className="h-4 animate-pulse"></div>
					</div>
				</div>
			</div>

			<div className="skeleton-card-short">
                <div className="animate-pulse"></div>

				<div>
					<div className="h-6 animate-pulse"></div>
					<div className="h-10 animate-pulse"></div>
					<div className="h-4 animate-pulse"></div>
				</div>
			</div>
		</Card>
	);
};

export default Skeleton;
