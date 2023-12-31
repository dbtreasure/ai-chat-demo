import { nanoid } from "@reduxjs/toolkit";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useAppDispatch } from "@/app/hooks";
import {
  addMessage,
  setStatus,
  fetchResponse,
  ChatMessage,
} from "@/app/slices/chatsSlice";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Intro() {
  const dispatch = useAppDispatch();

  const onMessageSubmit = (message: string) => () => {
    const bundledMessage: ChatMessage = {
      id: nanoid(),
      message: message,
      role: "user",
    };

    dispatch(addMessage(bundledMessage));
    dispatch(setStatus("loading"));
    dispatch(fetchResponse());
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome to the Chess Chat Bot!</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>
          This is a chatbot that can talk about chess. It is powered by OpenAI's
          GPT-3 API. You can ask it questions about chess, or you can just talk
          to it about chess. It will respond to you in a way that makes sense.
        </p>
        <p>
          To get started, click one of the suggested questions below or type
          your question into the input at the bottom of the screen.
        </p>
      </CardContent>
      <CardFooter className="flex flex-1 flex-col gap-1 items-start">
        <Button
          variant="ghost"
          onClick={onMessageSubmit("What's the Caro-Kann defense?")}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <p className="w-full p-2 text-left">What's the Caro-Kann defense?</p>
        </Button>
        <Button
          variant="ghost"
          onClick={onMessageSubmit(
            "What's a beginner response to e4 playing as Black?",
          )}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <p className="w-full p-2 text-left">
            What's a beginner response to e4 playing as Black?
          </p>
        </Button>
        <Button
          variant="ghost"
          onClick={onMessageSubmit("How can I beat Magnus Carlsen?")}
        >
          <ArrowRightIcon className="h-4 w-4" />
          <p className="w-full p-2 text-left">How can I beat Magnus Carlsen?</p>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Intro;
