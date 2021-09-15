import Cors from "cors";
const cheerio = require("cheerio");
const axios = require("axios");
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
	// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
	Cors({
		// Only allow requests with GET, POST and OPTIONS
		methods: ["GET"],
	})
);

const isValidUrl = (pathImage) => {
	let url_string;
	try {
		url_string = new URL(pathImage);
	} catch (_) {
		return false;
	}
	return url_string.href;
};

export default async function handler(req, res) {
	// Run cors
	await cors(req, res);

	const url = req.query.url;
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

			const title =
				$("title").text() || $('meta[name="title"]').attr("content");
			const description = $('meta[name="description"]').attr("content");
			const canonical =
				$('meta[rel="canonical"]').attr("href") ||
				$('link[rel="canonical"]').attr("href");
			const og_title = $('meta[property="og:title"]').attr("content");
			const og_description = $('meta[property="og:description"]').attr(
				"content"
			);
			const og_image = tmp_image;
			const og_url = $('meta[property="og:url"]').attr("content");
			const og_site_name = $('meta[property="og:site_name"]').attr(
				"content"
			);
			const og_type = $('meta[property="og:type"]').attr("content");
			const favicon = tmp_favicon;
			const twitter_title = $('meta[name="twitter:title"]').attr(
				"content"
			);
			const twitter_description = $(
				'meta[name="twitter:description"]'
			).attr("content");
			const twitter_site = $('meta[name="twitter:site"]').attr("content");
			const twitter_creator = $('meta[name="twitter:creator"]').attr(
				"content"
			);
			const twitter_card = $('meta[name="twitter:card"]').attr("content");
			const twitter_image = tmp_twitter_image;

			const meta_list = {
				title: title || null,
				description: description || null,
				"og:title": og_title || null,
				"og:description": og_description || null,
				"og:image": og_image || null,
				"og:url": og_url || null,
				"og:site_name": og_site_name || null,
				"og:type": og_type || null,
				favicon: favicon || null,
				canonical: canonical || null,
				"twitter:title": twitter_title || null,
				"twitter:description": twitter_description || null,
				"twitter:site": twitter_site || null,
				"twitter:creator": twitter_creator || null,
				"twitter:card": twitter_card || null,
				"twitter:image": twitter_image || null,
			};

			const meta_data = {
				title: og_title || title,
				description: og_description || description,
				image: og_image,
				og_url: og_url,
				og_site_name: og_site_name,
				favicon: favicon,
				twitter_title: twitter_title || og_title || title,
				twitter_description:
					twitter_description || og_description || description,
				twitter_image: twitter_image,
				url: canonical ? canonical : url,
				urlToShow: urlToShow,
			};

			res.status(200).json({
				meta_list: meta_list,
				meta_data: meta_data,
			});
		})
		.catch(function (error) {
            res.status(404).send(error);
		});
}
