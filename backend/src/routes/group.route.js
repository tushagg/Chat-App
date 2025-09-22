import express from "express";
import Group from "../models/group.model.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Create a group
router.post("/", protectRoute, async (req, res) => {
  try {
    const { name, members } = req.body;
    const group = await Group.create({
      name,
      members,
      createdBy: req.user._id, // Assuming req.user._id from protectRoute
    });
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all groups for a user
router.get("/", protectRoute, async (req, res) => {
  try {
    const groups = await Group.find({ members: req.user._id }); // Assuming req.user._id from protectRoute
    res.json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
