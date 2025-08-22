import express from "express";
import ADupload from "../models/ADupload.js";

const router = express.Router();

// Get all uploads
router.get("/", async (req, res) => {
  try {
    const uploads = await ADupload.find();
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single upload by ID
router.get("/:id", async (req, res) => {
  try {
    const upload = await ADupload.findById(req.params.id);
    if (!upload) return res.status(404).json({ message: "Upload not found" });
    res.json(upload);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new upload
router.post("/", async (req, res) => {
  try {
    const upload = new ADupload(req.body);
    const saved = await upload.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update upload
router.put("/:id", async (req, res) => {
  try {
    const updated = await ADupload.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Upload not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete upload
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await ADupload.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Upload not found" });
    res.json({ message: "Upload deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
