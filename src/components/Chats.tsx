import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import { chatStatus, chats } from "@/app/slices/chatsSlice";
import { Card } from "@/components/ui/card";
import { PersonIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

function Chats() {
  const status = useAppSelector(chatStatus);
  const chatMessages = useAppSelector(chats);

  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
      {chatMessages.map((message) => (
        <Card key={message.id} className="flex w-full items-center p-3">
          <Avatar className="flex-none h-12 w-12 mr-2">
            <AvatarFallback
              className={`${
                message.role === "user" ? "bg-orange-200" : "bg-lime-100"
              }`}
            >
              {message.role === "user" ? (
                <PersonIcon className="text-slate-900" />
              ) : (
                <LightningBoltIcon className="text-slate-900" />
              )}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">{message.message}</div>
        </Card>
      ))}
      {status === "loading" && (
        <Card key={-1} className="flex w-full items-center p-3">
          <Avatar className="h-12 w-12 mr-2">
            <AvatarFallback className="bg-lime-100">
              <LightningBoltIcon className="text-slate-900" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </Card>
      )}
    </div>
  );
}

export default Chats;
