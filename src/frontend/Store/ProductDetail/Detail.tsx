import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import type { ProductActions } from "@/utils/types/Products/Actions/ProductActions";
import { Bookmark, MinusSquare, PlusSquare, ShoppingCart } from "lucide-react";

export default function Detail({ ...props }: ProductActions) {
  return (
    <section className="grid xl:grid-cols-2 py-3 w-[95vw] md:w-[80vw] min-h-screen place-self-center gap-5">
      <div className="flex xl:hidden flex-col gap-3 h-fit">
        <img
          src={props.product?.url}
          alt=""
          className="w-[75%] h-[90%] self-center p-5 border"
        />
      </div>
      <div className="flex max-xl:order-2 flex-col py-4 gap-3 h-full">
        <img
          src={props.product?.url}
          alt=""
          className="w-[75%] max-xl:hidden self-center p-5 h-[60%] my-8 border"
        />
        <div className="content flex flex-col w-[80%] self-center gap-5">
          <h3 className="font-bold text-xl">
            {`Specifications`.toUpperCase()}
          </h3>
          <div className="flex flex-col gap-3">
            {props.mapSpecification.map((i, idx) => (
              <div
                key={idx}
                className="grid max-sm:text-xs gap-3 p-3 grid-cols-[0.4fr_1fr]"
              >
                <p className="font-medium">{i.key.toUpperCase()}</p>
                <p className="text-justify overflow-auto">{i.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex max-xl:order-1 w-full flex-col gap-5 divide-y p-8">
        <div className="flex flex-col gap-3 max-xl:text-center pb-5">
          <p className="font-bold text-xl">
            {props.product?.name.toUpperCase()}
          </p>
          <p className="font-bold text-lg">
            {props.product?.price
              .toLocaleString("id-ID", { style: "currency", currency: "IDR" })
              .toUpperCase()
              .split(",00")}
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-5">
          <div className="grid grid-cols-[0.4fr_1fr] gap-3">
            <p className="font-medium">Category</p>
            <p>{props.product?.type}</p>
          </div>
          <div className="grid grid-cols-[0.4fr_1fr] gap-3">
            <p className="font-medium">Brand</p>
            <p>{props.product?.specifications.brand}</p>
          </div>
          <div className="grid grid-cols-[0.4fr_1fr] gap-3">
            <p className="font-medium">Stock</p>
            <p>{props.product?.stock > 0 ? props.product?.stock : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-5">
          <p className="font-medium">Order Now!</p>
          <div className="flex items-center gap-3">
            <Button
              variant={"secondary"}
              className="size-8"
              disabled={props.order === 0}
              onClick={() => (props.order > 0 ? props.handleReduceOrder() : "")}
            >
              <MinusSquare className="size-4" />
            </Button>
            <Badge variant={"outline"} className="size-8 rounded-sm">
              {props.order}
            </Badge>
            <Button
              variant={"secondary"}
              className="size-8"
              disabled={props.order === props.product.stock}
              onClick={() =>
                props.order < props.product!.stock ? props.handleAddOrder() : ""
              }
            >
              <PlusSquare className="size-4" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <Button
            variant={"outline"}
            disabled={props.isPendingMake}
            onClick={() => props.makeWishlist()}
          >
            {props.isWishlist ? (
              <span className="flex items-center gap-3">
                <Bookmark className="fill-card-foreground" />
                Remove from Wihslist
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <Bookmark /> Add to Wishlist
              </span>
            )}{" "}
            {props.isPendingMake ? <Spinner /> : ""}
          </Button>
          <Button
            variant={"default"}
            disabled={props.isPending}
            onClick={() => props.handlePostOrder()}
          >
            <ShoppingCart />
            Order Now {props.isPending ? <Spinner /> : ""}{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
