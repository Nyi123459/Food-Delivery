import { Request, Response } from "express";
import express from "express";
import { getUsers } from "../controllers/user.controllers";
import User from "../models/User.model";

const router = express.Router();

router.get("/getdriver", getUsers);

router.post("/updateDriver", async (req: Request, res: Response) => {
  const { userId, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, {role}, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json("Server error");
  }
});

export default router;
