import express from "express";
import { addNewHour, editCustomHours, removeCustomHours, getAllCustomHours } from "../controllers/events.js";

const router = express.Router();

router.post("/add-custom-hour", addNewHour);
router.put("/edit-custom-hour", editCustomHours);
router.delete("/delete-custom-hour", removeCustomHours);
router.get("/get-custom-hour", getAllCustomHours);

export default router;
