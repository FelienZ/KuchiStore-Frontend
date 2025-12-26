import { SelectDemo } from "@/components/Common/Select";
import { Badge } from "@/components/ui/badge";
import useAuth from "@/hooks/useAuth";
import useDeleteWishlist from "@/utils/util/Hooks/Wishlists/useDeleteWishlist";
import useWishlist from "@/utils/util/Hooks/Wishlists/useWishlist";
import { User2 } from "lucide-react";
import { useState } from "react";
import WishlistItem from "./WishlistItem";
import LoadingFull from "../Loading";

export default function WishlistPage() {
  const { data, isLoading } = useWishlist();
  const { account } = useAuth();
  const wishlist = data?.payload;
  const [filter, setFilter] = useState("");
  const filteredData = wishlist?.filter((w) =>
    w.product.type.includes(filter.toLowerCase())
  );
  const [id, setId] = useState("");
  const { mutate: mutateDeleteWishlist, isPending: isPendingDelete } =
    useDeleteWishlist(id);
  const availableType = ["Computer", "Smartphone", "Accessories", "All"];
  function handleSetFilter(cat: string) {
    if (cat === "All") {
      return setFilter("");
    }
    setFilter(cat);
  }
  function handleDeleteWishlist(idProduct: string) {
    setId(idProduct);
    mutateDeleteWishlist();
  }
  return isLoading ? (
    <LoadingFull />
  ) : (
    <article className="flex flex-col gap-5 items-center place-self-center w-[90%]">
      <h2 className="font-medium text-xl">Your Wishlist</h2>
      <div className="flex max-sm:flex-col w-full justify-between items-center gap-3">
        <div className="grid grid-cols-[auto_1fr] w-full gap-3">
          <Badge
            variant={"outline"}
            className="rounded-full size-8 p-0.5 drop-shadow-md"
          >
            <User2 />
          </Badge>
          <Badge variant={"outline"} className="py-2 px-4 drop-shadow-md">
            {account?.username} Wishlist
          </Badge>
        </div>
        <div className="w-full md:w-[20%]">
          <SelectDemo
            title="Filter Wishlist"
            items={availableType}
            handleActions={handleSetFilter}
          />
        </div>
      </div>
      {filteredData!.length ? (
        <WishlistItem
          wishlist={filteredData!}
          isPendingDelete={isPendingDelete}
          handleDeleteWishlist={handleDeleteWishlist}
        />
      ) : (
        <section className="flex items-center border justify-center w-full h-screen gap-3">
          Wishlist Sedang Kosong!
        </section>
      )}
    </article>
  );
}
