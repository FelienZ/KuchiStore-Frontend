import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProductItemData } from "@/utils/types/Products/ProductData";
import type { Product } from "@/utils/types/Products/Products";
import { useNavigate } from "react-router";

export default function Products({
  payload,
}: Pick<Product<ProductItemData[] | undefined>, "payload">) {
  const navigate = useNavigate();
  return (
    <section>
      <div className="grid sm:grid-cols-2 2xl:grid-cols-4 gap-8 py-5">
        {payload!.map((i) => (
          <Card key={i.id} className="rounded-sm drop-shadow-sm">
            <CardContent className="flex flex-col aspect-square justify-evenly items-center gap-4 md:px-4">
              <img
                src={i.url}
                alt=""
                className="md:w-[75%] h-[29vh] scale-80"
              />
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-bold">{i.shortname}</h3>
                <p>
                  {i.price
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })
                    .split(",00")}
                </p>
              </div>
              <Button
                variant={"default"}
                className="w-[70%]"
                onClick={() => navigate(i.id)}
              >
                Check
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
