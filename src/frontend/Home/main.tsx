import Brands from "./Brands";
import Hero from "./Hero";
import Pinned from "./Pinned";

export default function Home() {
  return (
    <article className="flex flex-col w-[95vw] gap-5 place-self-center">
      <Hero />
      <Brands />
      <section className="flex w-[85vw] flex-col gap-5 self-center">
        <Pinned />
      </section>
    </article>
  );
}
