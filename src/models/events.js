import { Schema, model } from "mongoose";

const COLLECTION_NAME = "events";

const eventsSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
			unique: true,
		},
		date: {
			type: String,
			required: true,
		},
		start: {
			type: String,
			required: true,
		},
		end: {
			type: String,
			required: true,
		},
		offer: {
			type: Number,
			required: true,
		},
	},
	{ collection: COLLECTION_NAME }
);

const Events = model("events", eventsSchema);

export default Events;
