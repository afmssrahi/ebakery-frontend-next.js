const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

/**
 * Given an image return the Url
 * Works for local and deployed strapis
 * @param {*} image
 */
export const fromImageToUrl = (image) => {
	const imageUrl = image?.data?.attributes?.url;

	if (!imageUrl) {
		return `http://localhost:3000/vercel.svg`;
	}

	return `${API_URL}${imageUrl}`;
};
