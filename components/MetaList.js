import Check from "./Check";
import XCircle from "./XCircle";

const MetaList = ({ data }) => {
	return (
		<details>
			<summary>
				<h3>Meta list</h3>
				<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
					</svg>
			</summary>

			<ul>
				{Object.entries(data).map(([key, value]) => (
					<li key={key}>
						<div>
							{value == undefined ? <XCircle /> : <Check />}
						</div>
						
						<div>
							<h4>{key}</h4>
						</div>

						<div>
							{key == "favicon" && value != undefined ? (
								<img
									src={value}
									alt="Favicon"
								/>
							) : (
								<p>
									{value == undefined ? "-" : value}
								</p>
							)}
						</div>

						{/* { key == "twitter_site" || key == "twitter_creator" ? (
							<p className="text-tiny text-gray-800">
								<a href={`https://twitter.com/${value}`} target="_blank" rel="noreferrer">{value}</a>
							</p>
						) : null }

						{ value != undefined && value.indexOf("http") > 0 ? (
							<p className="text-tiny text-gray-800">
								<a href={value} target="_blank" rel="noreferrer">{value}</a>
							</p> ) : (
							<p className="text-tiny text-gray-800">
								{value == undefined ? "Not found" : value}
							</p>
						)} */}
					</li>
				))}
			</ul>
		</details>
	);
};

export default MetaList;
