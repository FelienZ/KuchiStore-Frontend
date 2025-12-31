import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Detail from "./Detail";
import useProductDetail from "@/utils/util/Hooks/Products/useProductDetail";
import useMakeOrder from "@/utils/util/Hooks/Orders/useMakeOrder";
import { toast } from "sonner";
import useWishlist from "@/utils/util/Hooks/Wishlists/useWishlist";
import useMakeWishlist from "@/utils/util/Hooks/Wishlists/useMakeWishlist";
import useDeleteWishlist from "@/utils/util/Hooks/Wishlists/useDeleteWishlist";
import type { WishlistData } from "@/utils/types/Wishlists/WishlistData";
import useAuth from "@/hooks/useAuth";
import LoadingFull from "@/frontend/Loading";

export default function ProductDetail() {
  const params = useParams();
  const { data, isLoading } = useProductDetail(params.id!);
  const { isAuthenticated } = useAuth();
  const [order, setOrder] = useState(0);
  const [detail, setDetail] = useState(data!);
  useEffect(() => {
    setDetail(data!);
  }, [data]);
  const { mutate, isPending } = useMakeOrder(
    {
      id: detail?.payload.id,
      price: detail?.payload.price * order,
      quantity: order,
    },
    setOrder
  );
  const { mutate: mutateMakeWishlist, isPending: isPendingMake } =
    useMakeWishlist(data?.payload.id);
  const { mutate: mutateDeleteWishlist } = useDeleteWishlist(data?.payload.id);
  const {
    data: wishlist,
    isLoading: isLoadingWishlist,
    isPending: isPendingDelete,
  } = useWishlist();
  const isWishlist = wishlist?.payload.some(
    (w: WishlistData): boolean => data?.payload.id === w?.product_id
  );
  const mapSpecification = [];
  for (const key in data?.payload?.specifications) {
    //representasi -> spec: key, prod.spec[spec]: val
    const assertKey = key as keyof typeof data.payload.specifications; // assert key prop valid
    mapSpecification.push({
      key,
      detail: data?.payload?.specifications[assertKey],
    });
  }
  function handleReduceOrder(): void {
    setOrder(order - 1);
  }
  function handleAddOrder(): void {
    setOrder(order + 1);
  }
  function handleMakeWishlist() {
    if (!isAuthenticated) {
      toast("Silahkan Login Terlebih Dahulu");
    }
    if (isWishlist) {
      mutateDeleteWishlist();
    } else {
      mutateMakeWishlist();
    }
  }
  function handlePostOrder() {
    if (!isAuthenticated) {
      toast("Silahkan Login Terlebih Dahulu");
    }
    if (order > 0) {
      mutate();
    } else {
      toast("Pemesanan Minimal 1 Item");
    }
  }
  return isLoading || isPending || isLoadingWishlist ? (
    <LoadingFull />
  ) : (
    <div className="flex flex-col relative gap-4 min-h-screen">
      <Detail
        product={data!.payload}
        mapSpecification={mapSpecification}
        order={order}
        handleAddOrder={handleAddOrder}
        handleReduceOrder={handleReduceOrder}
        handlePostOrder={handlePostOrder}
        isPending={isPending}
        isWishlist={isWishlist!}
        makeWishlist={handleMakeWishlist}
        isPendingMake={isPendingMake}
        isPendingDelete={isPendingDelete}
      />
    </div>
  );
}
