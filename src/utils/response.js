export function sendResponse(res, statusCode, isError, data) {
	res.status(statusCode).json({ error: isError, message: data });
}
