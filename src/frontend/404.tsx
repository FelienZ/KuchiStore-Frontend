import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

export default function NotFound(){
    const navigate = useNavigate()
    return(
        <article className="flex flex-col justify-center items-center min-h-screen gap-4">
            <img src="/Kuchistore.svg" alt="storelogo" className="w-[5vw] border drop-shadow-sm"/>
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-bold text-lg">404</h2>
                <p className="font-light">The page is Not Found</p>
            </div>
            <Button variant={'outline'} className="border drop-shadow-sm" onClick={()=> navigate('/')}>Home</Button>
        </article>
    )
}