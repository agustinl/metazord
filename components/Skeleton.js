import Card from "./Card";

const Skeleton = () => {
	return (
		<>
			<div className="skeleton-cards">
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
			</div>

			<div className="skeleton-cards">
				<div className="skeleton-card">
					<div className="card-header">
						<div className="animate-pulse skeleton-logo"></div>

						<h2> Meta List </h2>

						<hr />
					</div>

					<ul>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
						<li>
							<div className="animate-pulse skeleton-logo"></div>
							<div>
								<div className="h-4 animate-pulse"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Skeleton;
