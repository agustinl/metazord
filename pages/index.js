import { useState, useEffect } from "react";
const cheerio = require("cheerio");
const axios = require("axios");

import FacebookCard from "../components/FacebookCard";
import GoogleCard from "../components/GoogleCard";
import LinkedIn from "../components/LinkedIn";
import MetaList from "../components/MetaList";
import TwitterCard from "../components/TwitterCard";
import Skeleton from "../components/Skeleton";
import Error from "../components/Error";

import Head from "next/head";
import Slack from "../components/Slack";
import Footer from "../components/Footer";

export default function Home() {
	const [url, setUrl] = useState("https://kiff.app/");
	const [data, setData] = useState({});
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleEnter = (event) => {
		setError(false);

		if (event.code === "Enter" || event.code === "NumpadEnter") {
			var search = event.target.value.replace(
				/^(?:https?:\/\/)?(?:http?:\/\/)?/i,
				"https://"
			);

			setIsLoading(true);
			setData({});
			setUrl(search);
		}
	};

	useEffect(() => {
		const fetchData = async (url) => {
			const response = await axios
				.get(url)
				.then(function (response) {
					// handle success
					const body = response.data;
					const $ = cheerio.load(body);

					var image =
						$('meta[property="og:image"]').attr("content") ||
						$('meta[property="og:image:url"]').attr("content");

					var favicon =
						$('link[type="image/png"]').attr("href") ||
						$('link[rel="icon"]').attr("href") ||
						$('link[rel="shortcut icon"]').attr("href") ||
						$('link[type="image/x-icon"]').attr("href");

					var urlToShow = url
						.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
						.split("/")[0];

					if (image) {
						image = image.includes("://")
							? image
							: "//" + urlToShow + image;
					}

					if (favicon) {
						favicon = favicon.includes("https")
							? favicon
							: "//" + urlToShow + favicon;
					}

					const metadata = {
						title:
							$("title").text() ||
							$('meta[name="title"]').attr("content"),
						description: $('meta[name="description"]').attr(
							"content"
						),
						og_title: $('meta[property="og:title"]').attr(
							"content"
						),
						og_description: $(
							'meta[property="og:description"]'
						).attr("content"),
						og_image: image,
						og_url: $('meta[property="og:url"]').attr("content"),
						og_site_name: $('meta[property="og:site_name"]').attr(
							"content"
						),
						favicon: favicon,
						twitter_title: $('meta[name="twitter:title"]').attr(
							"content"
						),
						twitter_description: $(
							'meta[name="twitter:description"]'
						).attr("content"),
						twitter_site: $('meta[name="twitter:site"]').attr(
							"content"
						),
						twitter_creator: $('meta[name="twitter:creator"]').attr(
							"content"
						),
						twitter_card: $('meta[name="twitter:card"]').attr(
							"content"
						),
						twitter_image:
							$('meta[name="twitter:image"]').attr("content") ||
							$('meta[name="twitter:image:src"]').attr(
								"content"
							) ||
							image,
						url: url,
						urlToShow: urlToShow,
					};

					setData(metadata);
					setIsLoading(false);
				})
				.catch(function (error) {
					setError(true);
					setIsLoading(false);
					console.log(error.message);
				});
			/* .then(function () {
					console.log("ok");
				}); */
		};

		fetchData(url);
	}, [url]);

	return (
		<>
			<Head>
				<title>
					Metazord.io | Site meta tags information and live preview
				</title>
				<meta
					name="description"
					content="Get a complete information and preview of your site meta tags"
				/>

				<meta
					name="twitter:title"
					content="Metazord.io | Site meta tags information and live preview"
				/>
				<meta
					name="twitter:description"
					content="Get a complete information and preview of your site meta tags"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@metazord" />
				<meta name="twitter:creator" content="@agustinlautaro" />

				<meta property="og:url" content="https://metazord.io" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Metazord.io | Site meta tags information and live preview"
				/>
				<meta
					property="og:description"
					content="Get a complete information and preview of your site meta tags"
				/>
				<meta
					property="og:image"
					content="https://metazord.io/og-image.png"
				/>
				<meta
					property="og:image:alt"
					content="Metazord.io Preview Image"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="627" />
				<meta property="og:site_name" content="Metazord.io Website" />

				<meta
					name="keywords"
					content="Meta,Tags,Open Graph, Meta Checker"
				/>
				<meta name="robots" content="index,follow" />
				<meta name="googlebot" content="index,follow" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="shortcut icon"
					type="image/png"
					href="/favicon.png"
				/>

				<meta name="theme-color" content="#3EBD44"></meta>
			</Head>

			<header className="flex items-center mb-5 w-full bg-gray-100 py-8">
				<div className="w-3/12">
					<img
						src="logo.svg"
						alt="Metazord.io"
						className="h-8 ml-5"
					/>
					<h1 className="sr-only">metazord.io</h1>
				</div>

				<div className="relative mx-auto flex items-center justify-center w-5/12">
					<input
						className={`${
							error
								? "border-red-400 hover:border-red-400"
								: "border-gray-300  hover:border-gray-400"
						} border-2 rounded-lg h-10 pl-2 text-base w-full focus:outline-none`}
						onKeyPress={(e) => handleEnter(e)}
					/>
					<span className="absolute bg-gray-900 px-2 py-1 rounded-md right-2 text-xs font-normal text-gray-50">
						Press <b>Enter</b> to find metas
					</span>
				</div>

				<div className="w-3/12"></div>
			</header>

			<main className="flex flex-col items-center min-h-screen">
				<section className="w-full flex flex-col justify-center items-center">
					<div className="w-5/12 mx-3">
						{isLoading ? <Skeleton /> : null}

						{error ? <Error /> : null}

						{Object.keys(data).length > 0 ? (
							<>
								<MetaList data={data} />

								<GoogleCard data={data} />

								<FacebookCard data={data} />

								<TwitterCard data={data} />

								<LinkedIn data={data} />

								<Slack data={data} />

								<p className="text-xs text-gray-400 my-3">
									Card`s may be different, representation is
									based on each web documentation.
								</p>
							</>
						) : null}
					</div>
				</section>

				<section className="w-8/12 py-6 px-1 my-10">
					<h4 className="text-xl font-medium">Why meta tags?</h4>
					<p className="text-sm text-gray-500 mt-2 mb-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ab ipsa magnam molestias aliquid deserunt enim quaerat
						nobis doloribus suscipit laudantium nesciunt, vitae iure
						tenetur nemo similique fuga sunt, eos nam.
					</p>

					<h4 className="text-xl font-medium">
						What is Open Graph protocol?
					</h4>
					<p className="text-sm text-gray-500 mt-2 mb-3">
						&quot;The Open Graph protocol enables any web page to
						become a rich object in a social graph. For instance,
						this is used on Facebook to allow any web page to have
						the same functionality as any other object on
						Facebook.&quot;
					</p>
					<p className="text-xs text-gray-500 font-medium mt-2 mb-3">
						from{" "}
						<a
							href="https://ogp.me/"
							target="_blank"
							rel="noreferrer"
							className="underline">
							https://ogp.me/
						</a>
					</p>

					<h4 className="text-xl font-medium">Documentation</h4>
					<p className="text-sm text-gray-500 mt-2 mb-3">
						&quot;The Open Graph protocol enables any web page to
						become a rich object in a social graph. For instance,
						this is used on Facebook to allow any web page to have
						the same functionality as any other object on
						Facebook.&quot;
					</p>
					<p className="text-xs text-gray-500 font-medium mt-2 mb-3">
						from{" "}
						<a
							href="https://ogp.me/"
							target="_blank"
							rel="noreferrer"
							className="underline">
							https://ogp.me/
						</a>
					</p>
				</section>
			</main>

			<Footer />
		</>
	);
}
