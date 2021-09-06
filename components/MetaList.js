import Check from "./Check";
import XCircle from "./XCircle";

const MetaList = ({ data }) => {
	return (
		<details className="py-4 border-b border-t border-grey-lighter">
			<summary className="flex items-center">
				<h4 className="text-lg font-medium">Meta list</h4>
				<button className="ml-auto">
					<svg
						className="fill-current opacity-75 w-4 h-4 -mr-1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
					</svg>
				</button>
			</summary>

			<ul className="mt-4">
				{Object.entries(data).map(([key, value]) => (
					<li key={key} className="flex items-center flex-wrap mb-1">
						{value == undefined ? <XCircle /> : <Check />}
						<h4 className="text-tiny font-medium mx-1">{key}:</h4>

						{key == "favicon" && value != undefined ? (
							<img
								src={value}
								alt="Favicon"
								className="max-h-5"
							/>
						) : (
							<p className="text-tiny text-gray-800">
								{value == undefined ? "-" : value}
							</p>
						)}

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
