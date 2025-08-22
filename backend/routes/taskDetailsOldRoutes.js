import express from "express";
import TaskDetailsOld from "../models/TaskDetailsOld.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const items = await TaskDetailsOld.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const item = new TaskDetailsOld(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
