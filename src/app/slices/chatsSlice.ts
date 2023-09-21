import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  nanoid,
} from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import OpenAI from "openai";

const openaiAPIKey = import.meta.env.VITE_OPENAI_API_KEY as string;
const openai = new OpenAI({
  apiKey: openaiAPIKey,
  dangerouslyAllowBrowser: true,
});

export interface ChatMessage {
  id: string;
  message: string;
  role: "user" | "system" | "assistant";
}

interface ChatState {
  messages: ChatMessage[];
  status: "clean" | "loading" | "idle" | "failed";
}

const initialState: ChatState = {
  messages: [],
  status: "clean",
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ChatMessage>) => {
      state.messages.push(action.payload);
    },
    setStatus: (state, action: PayloadAction<ChatState["status"]>) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchResponse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchResponse.fulfilled, (state, action) => {
        state.status = "idle";
        state.messages.push(action.payload);
      })
      .addCase(fetchResponse.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const fetchResponse = createAsyncThunk(
  "chats/fetchMessage",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const messages = chats(state);
    const openAIReadyMessage = messages.map((message) => ({
      role: message.role,
      content: message.message,
    }));
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who responds to messages from students about chess." +
            "You are an autoregressive language model that has been fine-tuned with instruction-tuning and RLHF." +
            "You carefully provide accurate, factual, thoughtful, nuanced answers, and are brilliant at reasoning." +
            "If you think there might not be a correct answer, you say so. Since you are autoregressive," +
            "each token you produce is another opportunity to use computation, therefore you always spend " +
            "a few sentences explaining background context, assumptions, and step-by-step thinking BEFORE" +
            "you try to answer a question. Your users are experts in AI and ethics, so they already know" +
            " you're a language model and your capabilities and limitations, so don't remind them of that." +
            "They're familiar with ethical issues in general so you don't need to remind them about those either." +
            " Don't be verbose in your answers, but do provide details and examples where it might help the explanation.",
        },
        ...openAIReadyMessage,
      ],
      model: "gpt-3.5-turbo",
    });

    return {
      id: nanoid(),
      message: completion.choices[0].message.content,
      role: "assistant",
    } as ChatMessage;
  },
);

export const chatStatus = (state: RootState) => state.chats.status;
export const chats = (state: RootState) => state.chats.messages;

export const { addMessage, setStatus } = chatsSlice.actions;

export default chatsSlice.reducer;
