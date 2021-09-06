import { useState, useEffect } from "react";
const cheerio = require('cheerio');

export default function Home() {
	const [url, setUrl] = useState("https://agustinl.com");

	const handleOnChange = (event) => {
		setUrl(event.target.value);
	};

	useEffect(() => {
		const fetchData = async (url) => {

			const response = await fetch(url);
			// using await to ensure that the promise resolves
			const body = await response.text();
		  
			// parse the html text and extract titles
			const $ = cheerio.load(body);
			
			const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content')
			const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content')
			/* const url = $('meta[property="og:url"]').attr('content') */
			const site_name = $('meta[property="og:site_name"]').attr('content')
			const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content')
			const icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href')
			const keywords = $('meta[property="og:keywords"]').attr('content') || $('meta[name="keywords"]').attr('content')
		  
			console.log(title);
			console.log(description);
			console.log(image);

			
		};

		const timeoutId = setTimeout(() => fetchData(url), 1000);
		return () => clearTimeout(timeoutId);
	}, [url]);

	return <input className="border-2" onChange={handleOnChange} value={url} />;
}
