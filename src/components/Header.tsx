import { Button } from '@/components/ui/button'
import { ViewVerticalIcon } from "@radix-ui/react-icons"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Header() {
    const chatHistory = [
        {id: 1, label: "How to use the app"},
        {id: 2, label: "How to use the Caro-Kann"},
        {id: 3, label: "How to play the King's Indian, Gligoric System, Exchange Variation, Positional Line"},
    ]

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 md:border-b shrink-0">
        <div className="flex items-center gap-4">
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                <ViewVerticalIcon className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="inset-y-0 flex h-auto w-[600px] flex-col p-10">
                <SheetHeader className="flex">
                <SheetTitle>Chat History</SheetTitle>
                <SheetDescription>
                    Jump back into your previous conversations
                </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col flex-grow">
                
                {chatHistory.map((chat) => (
                    <Button key={chat.id} className="px-2" variant="ghost">
                    
                    <p className="w-full text-left truncate">{chat.label}</p>
                    </Button>
                ))}
                </div>
                <SheetFooter className="flex">
                <SheetClose asChild>
                    <Button type="submit">Clear history</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
            </Sheet>
            
            <h1 className="hidden md:flex">Paxton Frontend Test</h1>
        </div>

        <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Edit Context</Button>
        </div>
        </header>
    )
}

export default Header