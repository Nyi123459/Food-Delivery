import { Response } from "express";
import jwt from "jsonwebtoken";

const generateTokenAndCookie = async (userId: String, res: Response) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT secret environment variable is not defined");
  }
  const token = jwt.sign({ userId }, secret, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenAndCookie;
