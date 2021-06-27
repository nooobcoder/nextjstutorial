const handler = (request, response) => {
	response.status(200).json({ message: "Hello" });
};

export default handler;
