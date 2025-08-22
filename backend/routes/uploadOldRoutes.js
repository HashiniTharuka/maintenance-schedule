import express from "express";
import UploadOld from "../models/UploadOld.js";

const router = express.Router();

// Get all upload_old records
router.get("/", async (req, res) => {
  try {
    const uploads = await UploadOld.find();
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new upload_old record
router.post("/", async (req, res) => {
  try {
    const newUpload = new UploadOld(req.body);
    const savedUpload = await newUpload.save();
    res.status(201).json(savedUpload);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
