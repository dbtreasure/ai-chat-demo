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
      <main className="flex flex-1 flex-col items-center  bg-gray-100">
        <div className="flex flex-1 flex-col items-center justify-between p-4 w-9/10 md:w-3/4 lg:w-2/3 ">
          {status === "clean" ? <Intro /> : <Chats />}
          <MessageEntry />
        </div>
      </main>
    </div>
  );
}

export default App;
