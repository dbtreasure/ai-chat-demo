import Header from "@/components/Header";
import Intro from "@/components/Intro";
import MessageEntry from "@/components/MessageEntry";
import { useAppSelector } from "@/app/hooks";
import { chatStatus } from "@/app/slices/chatsSlice";
import Chats from "@/components/Chats";

function App() {
  const status = useAppSelector(chatStatus);

  return (
    <div className="min-h-screen flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center bg-secondary">
        <div
          id="chat-container"
          className="flex flex-1 flex-col items-center mt-4 justify-between md:w-3/4 lg:w-2/3 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 180px)" }}
        >
          {status === "clean" ? <Intro /> : <Chats />}
        </div>
        <MessageEntry />
      </main>
    </div>
  );
}

export default App;
