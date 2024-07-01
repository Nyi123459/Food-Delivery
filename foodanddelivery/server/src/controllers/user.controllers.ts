import * as express from "express";
import { Request, Response } from "express";
import User from "../models/User.model";

declare module "express-serve-static-core" {
  interface Request {
    user: {
      _id: string;
      fullName: string;
    };
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const loggedInUser = req.user._id;
    const filterUsers = await User.find({
      id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filterUsers);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in getDrivers:", error.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Error in getDrivers:", error);
    }
  }
};
