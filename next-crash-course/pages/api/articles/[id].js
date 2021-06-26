import { articles } from "../../../data";

const handler = (request, response) => {
	const { id: reqId } = request.query;
	const requestedArticle = articles.find(({ id }) => id === reqId);
	if (requestedArticle !== undefined)
		response.status(200).send(requestedArticle);
	else
		response
			.status(404)
			.json({ id: reqId, message: "Requested blog not found!" });
};

export default handler;
