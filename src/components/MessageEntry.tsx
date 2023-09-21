import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/app/hooks";
import {
  addMessage,
  setStatus,
  fetchResponse,
  ChatMessage,
} from "@/app/slices/chatsSlice";

function MessageEntry() {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value);

  const bundledMessage: ChatMessage = {
    id: nanoid(),
    message: message,
    role: "user",
  };

  const onMessageSubmit = async () => {
    setMessage("");
    dispatch(addMessage(bundledMessage));
    dispatch(setStatus("loading"));
    await dispatch(fetchResponse());
  };

  return (
    <Card className="flex flex-col w-full md:w-3/4 lg:w-2/3 p-4 fixed bottom-0">
      <div className="flex items-center space-x-2">
        <Input
          value={message}
          onChange={onInputChange}
          placeholder="How do I control the center in opening play?"
        />
        <Button onClick={onMessageSubmit}>
          <PaperPlaneIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

export default MessageEntry;
