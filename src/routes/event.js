const express = require("express");
const router = express.Router();
const eventController = require("../controller/event");
const protect = require("../middlewares/protect");

// Define routes and link them to controller functions
router.get("/", protect, eventController.getAllEvents);

router.get("/:eventId", protect, eventController.getEventById);
// PUT /api/events/:eventId - Update event details
router.put("/:eventId", protect, eventController.updateEvent);

// POST /api/events/ route
router.post("/", protect, eventController.postEvent);

module.exports = router;
