export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
export const MAGIC_PUBLIC_KEY =
	process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_live_01B05111FA5BBF66";
	
/**
 * Given an image, return the url
 * Works for local and deployed Strapi endpoints
 * @param {any} image
 */
const fromImageToURL = (image) => {
	if (!image) return "/vercel.svg";
	if (image?.url?.indexOf("/") === 0) return `${API_URL}${image.url}`;

	return image?.url;
};

export { fromImageToURL };
