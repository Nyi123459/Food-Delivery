import { create } from "zustand";
import { ObjectId } from "mongoose";

interface Message {
  _id: ObjectId;
  senderId: ObjectId;
  receiverId: ObjectId;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Conversation {
  _id: ObjectId;
  participantId: ObjectId[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

interface ConversationState {
  selectedConversation: Conversation | null;
  setSelectedConversation: (selectedConversation: Conversation | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

export interface Bid {
  userId?: string;
  driverId: string;
  driverName: string;
  rating: number;
  amount: number;
}

interface BidState {
  bids: Bid[];
  addBid: (bid: Bid) => void;
  clearBids: () => void;
}

export const useBidStore = create<BidState>((set) => ({
  bids: [],
  addBid: (bid) =>
    set((state) => ({
      bids: [...state.bids, bid].sort((a, b) => a.amount - b.amount),
    })),
  clearBids: () => set({ bids: [] }),
}));

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
