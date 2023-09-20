import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "@/app/store";

interface ChatMessage {
  id: number;
  message: string;
  sender: "user" | "bot";
}

interface ChatState {
  messages: ChatMessage[];
  status: "clean" | "loading" | "idle";
}

const initialState: ChatState = {
  messages: [
    {
      id: 1,
      message: "How do I attack the King's Indian Defense?",
      sender: "user",
    },
    {
      id: 2,
      message: "You should play the Samisch!",
      sender: "bot",
    },
  ],
  status: "clean",
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
  },
});

export const chatStatus = (state: RootState) => state.chats.status;
export const chats = (state: RootState) => state.chats.messages;

export const { addMessage } = chatsSlice.actions;

export default chatsSlice.reducer;
