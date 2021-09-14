import { useState, useEffect, useRef } from "react";
import Head from "next/head";

const cheerio = require("cheerio");
const axios = require("axios");

import FacebookCard from "../components/FacebookCard";
import GoogleCard from "../components/GoogleCard";
import LinkedIn from "../components/LinkedIn";
import MetaList from "../components/MetaList";
import TwitterCard from "../components/TwitterCard";
import Skeleton from "../components/Skeleton";
import Error from "../components/Error";
import SlackCard from "../components/SlackCard";
import Footer from "../components/Footer";

export default function Home({ init_meta_list, init_meta_data }) {

	const [url, setUrl] = useState("");
	const [data, setData] = useState(init_meta_data);
	const [metaList, setMetaList] = useState(init_meta_list);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const initialRender = useRef(true);

	const handleSubmit = (event) => {
		event.preventDefault();

		setError(false);

		/* if (event.code === "Enter" || event.code === "NumpadEnter") {
			var search = event.target.value.replace(
				/^(?:https?:\/\/)?(?:http?:\/\/)?/i,
				"https://"
			);

			setIsLoading(true);
			setData({});
			setUrl(search);
		} */
		
		var searchInput = event.target.search.value;
		var search = searchInput.replace(
			/^(?:https?:\/\/)?(?:http?:\/\/)?/i,
			"https://"
		);

		setIsLoading(true);
		setData({});
		setUrl(search);
	};

	const handleLogoClick = () => {
		setError(false);
		setIsLoading(true);
		setData({});
		setUrl("https://metazord.io");
	};

	useEffect(() => {
		const fetchData = async (url) => {
			const response = await axios
				.get(url)
				.then(function (response) {
					
					const body = response.data;
					const $ = cheerio.load(body);

					var tmp_image =
						$('meta[property="og:image"]').attr("content") ||
						$('meta[property="og:image:url"]').attr("content");

					var tmp_twitter_image =
						$('meta[name="twitter:image"]').attr("content") ||
						$('meta[name="twitter:image:src"]').attr("content");

					var tmp_favicon =
						$('link[type="image/png"]').attr("href") ||
						$('link[rel="icon"]').attr("href") ||
						$('link[rel="shortcut icon"]').attr("href") ||
						$('link[type="image/x-icon"]').attr("href");

					var urlToShow = url
						.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
						.split("/")[0];

					if (tmp_image) {
						tmp_image = isValidUrl(tmp_image)
							? tmp_image
							: "//" + urlToShow + tmp_image;
					}

					if (tmp_favicon) {
						/* favicon = favicon.includes("https")
							? favicon
							: "//" + urlToShow + favicon; */
						tmp_favicon = isValidUrl(tmp_favicon)
							? tmp_favicon
							: "//" + urlToShow + tmp_favicon;
					}

					if (tmp_twitter_image) {
						tmp_twitter_image = isValidUrl(tmp_twitter_image)
							? tmp_twitter_image
							: "//" + urlToShow + tmp_twitter_image;
					}

					const title = $("title").text() || $('meta[name="title"]').attr("content");
					const description = $('meta[name="description"]').attr("content");
					const canonical = $('meta[rel="canonical"]').attr("href") || $('link[rel="canonical"]').attr("href");
					const og_title = $('meta[property="og:title"]').attr("content");
					const og_description = $('meta[property="og:description"]').attr("content");
					const og_image = tmp_image;
					const og_url = $('meta[property="og:url"]').attr("content");
					const og_site_name = $('meta[property="og:site_name"]').attr("content");
					const og_type = $('meta[property="og:type"]').attr("content");
					const favicon = tmp_favicon;
					const twitter_title = $('meta[name="twitter:title"]').attr("content");
					const twitter_description = $('meta[name="twitter:description"]').attr("content");
					const twitter_site = $('meta[name="twitter:site"]').attr("content");
					const twitter_creator = $('meta[name="twitter:creator"]').attr("content");
					const twitter_card = $('meta[name="twitter:card"]').attr("content");
					const twitter_image = tmp_twitter_image;

					const meta_list = {
						'title': title,
						'description': description,
						'og:title': og_title,
						'og:description': og_description,
						'og:image': og_image,
						'og:url': og_url,
						'og:site_name': og_site_name,
						'og:type': og_type,
						'favicon': favicon,
						'canonical': canonical,
						'twitter:title': twitter_title,
						'twitter:description': twitter_description,
						'twitter:site': twitter_site,
						'twitter:creator': twitter_creator,
						'twitter:card': twitter_card,
						'twitter:image': twitter_image
					}

					const meta_data = {
						title: og_title || title,
						description: og_description || description,
						image: og_image,
						og_url: og_url,
						og_site_name: og_site_name,
						favicon: favicon,
						twitter_title: twitter_title || og_title || title,
						twitter_description: twitter_description || og_description || description,
						twitter_image: twitter_image,
						url: canonical ? canonical : url,
						urlToShow: urlToShow,
					}

					setData(meta_data);
					setMetaList(meta_list);
					setIsLoading(false);
				})
				.catch(function (error) {
					setError(true);
					setIsLoading(false);
					console.log(error);
				});
			/* .then(function () {
					console.log("ok");
				}); */
		};

		// Prevent useEffect during initial render 
		if (initialRender.current) {
			initialRender.current = false;
		} else {
			fetchData(url);
		}
		
	}, [url]);

	const isValidUrl = (pathImage) => {
		let url_string;
		try {
			url_string = new URL(pathImage);
		} catch (_) {
			return false;
		}
		return url_string.href;
	};

	return (
		<>
			<Head>
				<title>
					metazord.io | Site meta tags information and live preview
				</title>
				<meta
					name="description"
					content="Get a complete information and preview of your site meta tags"
				/>

				<meta
					name="twitter:title"
					content="metazord.io | Site meta tags information and live preview"
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
					content="metazord.io | Site meta tags information and live preview"
				/>
				<meta
					property="og:description"
					content="Get a complete information and preview of your site meta tags"
				/>
				<meta
					property="og:image"
					content="/og-image.png"
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

			<header>
				<div>
					<img
						src="logo.svg"
						alt="Metazord.io Logo"
						onClick={(e) => handleLogoClick()}
					/>
					<h1 className="sr-only">metazord.io</h1>
				</div>

				<form
					onSubmit={handleSubmit}
				>
					<input
						placeholder="metazord.io"
						className={`${
							error
								? "input-error"
								: ""
						}`}
						name="search"
						/* onKeyPress={(e) => handleEnter(e)} */
					/>
					<span>Enter to find tags</span>
				</form>

				<div></div>
			</header>

			<main>
				<section id="cards">
					{isLoading ? <Skeleton /> : null}

					{error ? <Error /> : null}

					{Object.keys(data).length > 0 ? (
						<>
							<MetaList data={metaList} />

							<GoogleCard data={data} />

							<FacebookCard data={data} />

							<TwitterCard data={data} />

							<LinkedIn data={data} />

							<SlackCard data={data} />

							<div className="disclaimer">
								<p>Card`s may be different. Representation is based on an approximation of each web documentation.</p>
							</div>
						</>
					) : null}
				</section>

				<section className="faqs">
					<h4>Why use meta tags?</h4>
					<blockquote
						cite="https://developers.google.com/search/docs/advanced/crawling/special-tags">
						<p>
							Page-level meta tags are a great way for website
							owners to provide search engines with information
							about their sites. Meta tags can be used to provide
							information to all sorts of clients, and each system
							processes only the meta tags they understand and
							ignores the rest.
						</p>
						<p className="source">
							from{" "}
							<a
								href="https://developers.google.com/search/docs/advanced/crawling/special-tags"
								target="_blank"
								rel="noreferrer">
								developers.google.com
							</a>
						</p>
					</blockquote>

					<h4>
						What is Open Graph protocol?
					</h4>
					<blockquote
						cite="https://ogp.me/">
						<p>
							The Open Graph protocol enables any web page to
							become a rich object in a social graph. For
							instance, this is used on Facebook to allow any web
							page to have the same functionality as any other
							object on Facebook.
						</p>
						<p className="source">
							from{" "}
							<a
								href="https://ogp.me/"
								target="_blank"
								rel="noreferrer">
								ogp.me
							</a>
						</p>
					</blockquote>

					<h4>Documentation & Resources</h4>
					<ul>
						<li>
							<p>
								<a href="https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin"
								target="_blank"
								rel="noreferrer">
									Making Your Website Shareable on LinkedIn
								</a> &#8212; LinkedIn
							</p>
						</li>
						<li>
							<p>
								<a href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards"
								target="_blank"
								rel="noreferrer">
									About Twitter Cards
								</a> &#8212; Twitter
							</p>
						</li>
						<li>
							<p>
								<a href="https://developers.facebook.com/docs/sharing/webmasters/"
								target="_blank"
								rel="noreferrer">
									A Guide to Sharing for Webmasters
								</a> &#8212; Facebook
							</p>
						</li>
						<li>
							<p>
								<a href="https://developers.facebook.com/docs/sharing/best-practices/"
								target="_blank"
								rel="noreferrer">
									Best Practices - Sharing
								</a> &#8212; Facebook
							</p>
						</li>
						<li>
							<p>
								<a href="https://developers.google.com/search/blog/2021/08/update-to-generating-page-titles"
								target="_blank"
								rel="noreferrer">
									An update to how we generate web page titles 
								</a> &#8212; Google
							</p>
						</li>
						<li>
							<p>
								<a href="https://developers.facebook.com/tools/debug/"
								target="_blank"
								rel="noreferrer">
									Sharing Debugger
								</a> &#8212; Facebook
							</p>
						</li>
						<li>
							<p>
								<a href="https://cards-dev.twitter.com/validator"
								target="_blank"
								rel="noreferrer">
									Card Validator
								</a> &#8212; Twitter
							</p>
						</li>
					</ul>
				</section>
			</main>

			<Footer />
		</>
	);
}

export async function getStaticProps() {

	const init_meta_list = {
		'title': "metazord.io | Site meta tags information and live preview",
		'description': "Get a complete information and preview of your site meta tags",
		'og:title': "metazord.io | Site meta tags information and live preview",
		'og:description': "Get a complete information and preview of your site meta tags",
		'og:image': "/og-image.png",
		'og:url': "https://metazord.io",
		'og:site_name': "Metazord.io Website",
		'og:type': "website",
		'favicon': "/favicon.png",
		'canonical': "https://metazord.io",
		'twitter:title': "metazord.io | Site meta tags information and live preview",
		'twitter:description': "Get a complete information and preview of your site meta tags",
		'twitter:site': "@metazord",
		'twitter:creator': "@agustinlautaro",
		'twitter:card': "summary_large_image",
		'twitter:image': "/og-image.png"
	}
	
	const init_meta_data = {
		title: "metazord.io | Site meta tags information and live preview",
		description: "Get a complete information and preview of your site meta tags",
		image: "/og-image.png",
		og_url: "https://metazord.io",
		og_site_name: "Metazord.io Website",
		favicon: "/favicon.png",
		twitter_title: "metazord.io | Site meta tags information and live preview",
		twitter_description: "Get a complete information and preview of your site meta tags",
		twitter_image: "/og-image.png",
		url: "https://metazord.io",
		urlToShow: "metazord.io",
	}

	return {
	  props: {
		init_meta_list,
		init_meta_data
	  },
	}
}