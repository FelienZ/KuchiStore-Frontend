import Brands from "./Brands";
import Hero from "./Hero";
import Pinned from "./Pinned";

export default function Home(){
    return(
        <article className="flex flex-col gap-5 w-full">
            <Hero/>
            <Brands/>
            <section className="w-[90vw] flex flex-col gap-5 self-center">
                <Pinned/>
            </section>
        </article>
    )
}