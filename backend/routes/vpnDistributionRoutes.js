import express from "express";
import VPNDistribution from "../models/VPNDistribution.js";

const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  try {
    const records = await VPNDistribution.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new record
router.post("/", async (req, res) => {
  try {
    const newRecord = new VPNDistribution(req.body);
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
