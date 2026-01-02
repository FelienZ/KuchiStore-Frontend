import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import type { WishlistData } from "@/utils/types/Wishlists/WishlistData";
import { Bookmark } from "lucide-react";
import { useNavigate } from "react-router";

type WishlistAction = {
  wishlist: WishlistData[];
  isPendingDelete: boolean;
  handleDeleteWishlist: (id: string) => void;
};
export default function WishlistItem({
  wishlist,
  isPendingDelete,
  handleDeleteWishlist,
}: WishlistAction) {
  const navigate = useNavigate();
  return (
    <div className="grid sm:grid-cols-2 w-full 2xl:grid-cols-4 gap-8 py-3">
      {wishlist!.map((i) => (
        <Card key={i.id} className="rounded-sm drop-shadow-sm">
          <CardContent className="flex flex-col aspect-square justify-evenly items-center gap-4 md:px-4">
            {isPendingDelete ? (
              <div className="absolute place-content-center place-items-center inset-0 backdrop-blur-lg">
                <Spinner />
              </div>
            ) : (
              ""
            )}
            <img
              src={i.product.url}
              alt=""
              className="w-[85%] xl:scale-80 max-sm:h-35 max-sm:w-full h-55 xl:h-65 object-contain"
            />
            <h3 className="font-bold">{i.product.shortname}</h3>
            <p>
              {i.product.price
                .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
                .split(",00")}
            </p>
            <CardFooter className="w-full grid gap-3 grid-cols-[0.5fr_1.5fr]">
              <Button
                variant={"outline"}
                onClick={() => handleDeleteWishlist(i.product_id)}
              >
                <Bookmark className="fill-card-foreground" />
              </Button>
              <Button
                variant={"default"}
                className="w-full"
                onClick={() => navigate(`/products/${i.product.id}`)}
              >
                Check
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
