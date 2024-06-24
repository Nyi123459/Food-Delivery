import express from "express";
import { getDrivers } from "../controllers/driver.controllers";

const router = express.Router();

router.get("/getdriver", getDrivers);

export default router;
