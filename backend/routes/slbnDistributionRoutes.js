import express from "express";
import SLBNdistribution from "../models/SLBNdistribution.js";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {
  try {
    const data = await SLBNdistribution.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const item = new SLBNdistribution(req.body);
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
