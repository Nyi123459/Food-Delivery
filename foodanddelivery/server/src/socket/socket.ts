import { Server } from "socket.io";
import http from "http";
import express from "express";

interface UserSocketMap {
  [userId: string]: string;
}

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap: UserSocketMap = {};

export const getReceiverSocketId = (receiverId: string): string | undefined => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  const userId = socket.handshake.query.userId as string;

  if (typeof userId === "string" && userId !== "undefined") {
    userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  } else {
    console.error("Invalid userId:", userId);
  }

  socket.on("requestBid", (bookingDetails) => {
    console.log("Received bookingDetails:", bookingDetails);
    const { userId } = bookingDetails;
    io.emit("newBooking", { ...bookingDetails, userId });
  });

  socket.on("bid", (bidDetails) => {
    const { userId, driverId, driverName, rating, amount } = bidDetails;
    const userSocketId = userSocketMap[userId];
    if (userSocketId) {
      io.to(userSocketId).emit("updateBids", {
        driverId,
        driverName,
        rating,
        amount,
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    if (typeof userId === "string" && userId !== "undefined") {
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }
  });
});

// Export app, io, and server for use in other modules
export { app, io, server };
