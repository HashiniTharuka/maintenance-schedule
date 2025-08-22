import express from "express";
import Tower from "../models/Tower.js";

const router = express.Router();

// Get all towers
router.get("/", async (req, res) => {
  try {
    const towers = await Tower.find();
    res.json(towers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a tower
router.post("/", async (req, res) => {
  try {
    const tower = new Tower(req.body);
    const saved = await tower.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
