import express from "express";
import TowerDetails from "../models/TowerDetails.js";

const router = express.Router();

// Get all tower details
router.get("/", async (req, res) => {
  try {
    const towers = await TowerDetails.find();
    res.json(towers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create tower details
router.post("/", async (req, res) => {
  try {
    const tower = new TowerDetails(req.body);
    const saved = await tower.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
