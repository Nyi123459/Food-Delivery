import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Driver from "../models/Driver.model";
import generateTokenAndCookie from "../utils/generateToken";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const driver = await Driver.findOne({ email });
    if (driver) {
      return res.status(400).json({ error: "Email already existed" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDriver = new Driver({
      email,
      password: hashedPassword,
    });
    if (newDriver) {
      await generateTokenAndCookie(newDriver._id.toString(), res);
      await newDriver.save();
      res.status(201).json({
        _id: newDriver._id,
        email: newDriver.email,
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
