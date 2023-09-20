import Header from "@/components/Header"
import Intro from "@/components/Intro"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

function App() {

  return (
    <div className="min-h-screen flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center  bg-gray-100">
        <div className="flex flex-1 flex-col items-center justify-between p-4 w-9/10 md:w-3/4 lg:w-2/3 ">
          <Intro />
          
          <Card className="flex flex-col w-full justify-end p-4">
            <div className="flex w-full items-center space-x-2">
              <Input placeholder="How do I control the center in opening play?"/>
              <Button type="submit">
                <PaperPlaneIcon className="h-4 w-4" />
              </Button>
            </div>    
          </Card>
        </div>
      </main>
    </div>
  )
}

export default App