import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import chatsSlice from "./slices/chatsSlice";

export const store = configureStore({
  reducer: {
    chats: chatsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
