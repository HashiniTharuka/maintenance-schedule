import express from "express";
import Upload from "../models/Upload.js";

const router = express.Router();

// Get all uploads
router.get("/", async (req, res) => {
  try {
    const uploads = await Upload.find();
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new upload
router.post("/", async (req, res) => {
  try {
    const newUpload = new Upload(req.body);
    const savedUpload = await newUpload.save();
    res.status(201).json(savedUpload);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
