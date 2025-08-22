import express from "express";
import TempTwMTC from "../models/TempTwMTC.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const items = await TempTwMTC.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const item = new TempTwMTC(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
