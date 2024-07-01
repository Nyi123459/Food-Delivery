// DriverBidding.tsx
import React, { useEffect, useState } from "react";
import { useSocketContext } from "../../../context/socketContext";
import Modal from "react-modal";
import { useAuth } from "../../../context/userContext";
import { Bid, useBidStore } from "../../../zustand/useConversation";

interface DriverBiddingProps {
  isOpen: boolean;
  onClose: () => void;
}

const DriverBidding: React.FC<DriverBiddingProps> = ({ isOpen, onClose }) => {
  const { socket } = useSocketContext();
  const [bids, setBids] = useState<Bid[]>([]);
  const [bidAmount, setBidAmount] = useState<number>(0);
  const { currentUser } = useAuth();
  const addBid = useBidStore((state) => state.addBid);

  useEffect(() => {
    if (socket) {
      socket.on("updateBids", (bidDetails: Bid) => {
        addBid(bidDetails);
      });

      return () => {
        socket.off("updateBids");
      };
    }
  }, [socket, addBid]);

  const handleBidAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = parseFloat(event.target.value);
    setBidAmount(amount);
  };

  const handlePlaceBid = () => {
    if (bidAmount > 0 && currentUser) {
      const bidDetails: Bid = {
        driverId: currentUser._id,
        driverName: currentUser.email, // Adjust as per your data structure
        rating: 4.5, // Example rating
        amount: bidAmount,
      };

      socket?.emit("bid", bidDetails);
      setBidAmount(0); // Reset bid amount after placing bid
    } else {
      alert("Please enter a valid bid amount.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Driver Bids</h2>
      <button onClick={onClose}>Close</button>
      <div>
        <input
          type="number"
          placeholder="Enter bid amount"
          value={bidAmount}
          onChange={handleBidAmountChange}
        />
        <button onClick={handlePlaceBid}>Place Bid</button>
      </div>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <p>Driver Name: {bid.driverName}</p>
            <p>Rating: {bid.rating}</p>
            <p>Amount: {bid.amount}</p>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default DriverBidding;
