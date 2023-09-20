import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {

  return (
    <div className="min-h-screen flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-between p-4 border bg-gray-100">
        <div className="flex w-2/3 items-center">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Welcome to the Chess Chat Bot!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p>
                This is a chatbot that can talk about chess. It is powered by OpenAI's GPT-3 API. 
                You can ask it questions about chess, or you can just talk to it about chess. 
                It will respond to you in a way that makes sense.
              </p>
              <p>
                To get started, click one of the suggested questions below to get started.
              </p>
            </CardContent>
            <CardFooter className="flex flex-1 flex-col gap-1 items-start">
              <Button variant="ghost">
                <ArrowRightIcon className="h-4 w-4" />
                <p className="w-full p-2 text-left">
                  What's the Caro-Kann defense?
                </p>
              </Button>
              <Button variant="ghost">
                <ArrowRightIcon className="h-4 w-4" />
                <p className="w-full p-2 text-left">
                  What's a beginner response to e4 playing as Black?
                </p>
              </Button>
              <Button variant="ghost">
                <ArrowRightIcon className="h-4 w-4" />
                <p className="w-full p-2 text-left">
                  How can I beat Magnus Carlsen?
                </p>
              </Button>

            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default App