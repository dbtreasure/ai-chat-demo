import chatReducer, { ChatState, setStatus } from "./chatsSlice";

describe("counter reducer", () => {
  const initialState = {
    messages: [],
    status: "clean",
  } as ChatState;
  it("should handle initial state", () => {
    expect(chatReducer(undefined, { type: "unknown" })).toEqual({
      messages: [],
      status: "clean",
    });
  });
  // write a test to check the setStatus reducer
  it("should handle setStatus", () => {
    expect(chatReducer(initialState, setStatus("loading"))).toEqual({
      messages: [],
      status: "loading",
    });
  });
});
