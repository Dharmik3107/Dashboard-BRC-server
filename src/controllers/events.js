import Events from "../models/events.js";
import { sendResponse } from "./../utils/response.js";

export async function addNewHour(req, res) {
	try {
		const { id, date, start, end, offer } = req.body;

		//Checking event with same id exist or not
		const isEventExist = await Events.findOne({ id });

		//Condition operations based on existance
		if (!isEventExist) {
			const newEvent = new Events({
				id,
				date,
				start,
				end,
				offer,
			});
			await newEvent
				.save()
				.then((result) => sendResponse(res, 200, false, result))
				.catch((error) => sendResponse(res, 500, true, error));
		} else {
			sendResponse(res, 409, true, "event already exists");
		}
	} catch (error) {
		console.error(error);
	}
}

export async function removeCustomHours(req, res) {
	try {
		const { id } = req.body;

		//Check event exist or not
		const isEventExist = await Events.findOne({ id });

		if (isEventExist) {
			await Events.findByIdAndDelete({ id })
				.then((result) => sendResponse(res, 200, false, "Event Deleted"))
				.catch((error) => sendResponse(res, 500, true, error));
		} else {
			sendResponse(res, 404, true, "Event doest not exist in database");
		}
	} catch (error) {
		console.error(error);
	}
}

export async function editCustomHours(req, res) {
	try {
		const { id, date, start, end, offer } = req.body;

		//Checking event with same id exist or not
		const isEventExist = await Events.findOne({ id });

		if (isEventExist) {
			await Events.findByIdAndUpdate({ id }, { id, date, start, end, offer }, { new: true })
				.then((result) => sendResponse(res, 200, false, result))
				.catch((error) => sendResponse(res, 500, true, error));
		} else {
			sendResponse(res, 404, true, "Event Doest not exist");
		}
	} catch (error) {
		console.error(error);
	}
}

export async function getAllCustomHours(req, res) {
	try {
		await Events.find({})
			.then((result) => sendResponse(res, 200, false, result))
			.catch((error) => sendResponse(res, 500, true, error));
	} catch (error) {
		console.error(error);
	}
}
