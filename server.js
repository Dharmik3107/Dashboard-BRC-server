import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./src/database/database.js";

import eventRouter from "./src/routes/events.js";

dotenv.config();

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", eventRouter);

async function startServer() {
	await connectDatabase();
	app.listen(process.env.PORT, () => {
		console.log(`Server started successfully on port ${process.env.PORT}`);
	});
}

startServer();
