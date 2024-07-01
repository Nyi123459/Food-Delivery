import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "../utils/generateToken";
import User from "../models/User.model";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    const driver = await User.findOne({ email });
    if (driver) {
      return res.status(400).json({ error: "Email already existed" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newDriver = new User({
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const driver = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      driver?.password || ""
    );
    if (!driver || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokenAndCookie(driver._id.toString(), res);
    res.status(200).json({
      _id: driver._id,
      email: driver.email,
      role: driver.role,
    });
  } catch (error) {
    console.log("Error in login controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req: Request, res: Response) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successrully" });
  } catch (error) {
    console.log("Error in logout controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
