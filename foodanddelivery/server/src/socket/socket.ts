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
    origin: ["http://localhost:5173"], // Adjust this based on your frontend URL
    methods: ["GET", "POST"],
  },
});

const userSocketMap: UserSocketMap = {};

// Function to get receiver's socket ID based on user ID
export const getReceiverSocketId = (receiverId: string): string | undefined => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Retrieve userId from handshake query parameters
  const userId = socket.handshake.query.userId as string;

  // Validate userId
  if (typeof userId === "string" && userId !== "undefined") {
    // Map userId to socket.id
    userSocketMap[userId] = socket.id;

    // Emit event to get online users (optional)
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  } else {
    console.error("Invalid userId:", userId);
  }

  // Handle requestBid event from client
  socket.on("requestBid", (bookingDetails) => {
    console.log("Received bookingDetails:", bookingDetails);
    // Emit newBooking event to all clients
    io.emit("newBooking", bookingDetails);
  });

  // Handle bid event from driver
  socket.on("bid", (bidDetails) => {
    const { userId, driverId, driverName, rating, amount } = bidDetails;
    const userSocketId = userSocketMap[userId];
    if (userSocketId) {
      // Emit updateBids event to specific client (userId)
      io.to(userSocketId).emit("updateBids", {
        driverId,
        driverName,
        rating,
        amount,
      });
    }
  });

  // Handle disconnection of user
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    // Remove userSocketMap entry for disconnected user
    if (typeof userId === "string" && userId !== "undefined") {
      delete userSocketMap[userId];
      // Emit event to get online users after disconnection (optional)
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    }
  });
});

// Export app, io, and server for use in other modules
export { app, io, server };
