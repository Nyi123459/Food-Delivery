import * as express from "express";
import { Request, Response } from "express";
import Driver from "../models/Driver.model";

declare module "express-serve-static-core" {
  interface Request {
    driver: {
      _id: string;
      fullName: string;
    };
  }
}

export const getDrivers = async (req: Request, res: Response) => {
  try {
    const loggedInDriver = req.driver._id;
    const filterDrivers = await Driver.find({
      id: { $ne: loggedInDriver },
    }).select("-password");
    res.status(200).json(filterDrivers);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error in getDrivers:", error.message);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log("Error in getDrivers:", error);
    }
  }
};
