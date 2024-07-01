import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import express from "express";
import cors from "cors";

import connectToMongoDB from "./db/connectToMongoDB";
import authRoutes from "../../server/src/routes/auth.route";
import userRoutes from "./routes/user.route";
import messageRoutes from "./routes/message.route";
import { server, app } from "./socket/socket";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/drivers", userRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is runnig on port ${PORT}`);
});
