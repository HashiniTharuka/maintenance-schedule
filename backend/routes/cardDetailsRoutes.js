import express from "express";
import CardDetails from "../models/CardDetails.js";

const router = express.Router();

// Get all card details
router.get("/", async (req, res) => {
  try {
    const cards = await CardDetails.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single card detail by ID
router.get("/:id", async (req, res) => {
  try {
    const card = await CardDetails.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new card detail
router.post("/", async (req, res) => {
  try {
    const card = new CardDetails(req.body);
    const saved = await card.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update card detail
router.put("/:id", async (req, res) => {
  try {
    const updated = await CardDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Card not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete card detail
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await CardDetails.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Card not found" });
    res.json({ message: "Card deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
