import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

import { useState } from "react";

function MessageEntry() {
  const [message, setMessage] = useState("");

  return (
    <Card className="flex flex-col w-full justify-end p-4">
      <div className="flex w-full items-center space-x-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How do I control the center in opening play?"
        />
        <Button type="submit">
          <PaperPlaneIcon className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

export default MessageEntry;
