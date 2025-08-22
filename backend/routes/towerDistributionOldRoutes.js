import express from "express";
import TowerDistributionOld from "../models/TowerDistributionOld.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const data = await TowerDistributionOld.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const record = new TowerDistributionOld(req.body);
    const saved = await record.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
