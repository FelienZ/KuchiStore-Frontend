import { BrandData } from "@/utils/data/Brands";

export default function Brands() {
  return (
    <section className="flex items-center py-5 justify-evenly gap-5 overflow-x-auto scrollbar-hide">
      {BrandData.map((i) => (
        <img
          key={i.id}
          src={i.url}
          alt={`brands-${i.id}`}
          className="w-15 md:w-20 lg:w-30 drop-shadow-xs drop-shadow-foreground"
        />
      ))}
    </section>
  );
}
