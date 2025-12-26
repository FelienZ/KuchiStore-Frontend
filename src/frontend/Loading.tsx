import { Spinner } from "@/components/ui/spinner";

export default function LoadingFull(){
    return(
        <section className="flex items-center justify-center w-full h-screen gap-3">
            Loading..
            <Spinner/>
        </section>
    )
}