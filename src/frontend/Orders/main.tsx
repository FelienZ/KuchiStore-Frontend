import { Calendar28 } from "@/components/Common/Calendar";
import { SelectDemo } from "@/components/Common/Select";
import { TableDemo } from "@/components/Common/Table";
import { Button } from "@/components/ui/button";
import useOrder from "@/utils/util/Hooks/Orders/useOrders";
import { ShoppingBag, ShoppingCart, User2 } from "lucide-react";
import { useNavigate } from "react-router";
import LoadingFull from "../Loading";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import useAuth from "@/hooks/useAuth";

export default function OrderPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useOrder();
  const { account } = useAuth();
  const [filter, setFilter] = useState("");
  const orders = data?.payload;
  const filteredData = orders?.filter((o) =>
    o.product.type.includes(filter.toLowerCase())
  );
  const availableType = ["Computer", "Smartphone", "Accessories", "All"];
  function handleAction(cat: string) {
    if (cat === "All") {
      return setFilter("");
    }
    setFilter(cat);
  }
  return isLoading ? (
    <LoadingFull />
  ) : (
    <article className="flex flex-col gap-5 place-self-center w-[90%]">
      <div className="flex w-full justify-between items-center">
        <h2 className="font-medium sm:text-xl max-sm:text-sm flex items-center gap-3">
          <ShoppingBag />
          Your Orders
        </h2>
        <div className="flex items-center gap-3">
          <SelectDemo
            title="More"
            items={availableType}
            handleActions={handleAction}
          />
          <Button onClick={() => navigate("/products")}>
            Go Shop <ShoppingCart />
          </Button>
        </div>
      </div>
      <div className="flex max-sm:flex-col w-full justify-between items-center gap-3">
        <div className="grid grid-cols-[auto_1fr] max-sm:w-full gap-3">
          <Badge
            variant={"outline"}
            className="rounded-full size-8 p-0.5 drop-shadow-md"
          >
            <User2 />
          </Badge>
          <Badge
            variant={"outline"}
            className="py-2 w-full px-4 drop-shadow-md"
          >
            {account?.username}'s Orders
          </Badge>
        </div>
        <div className="w-full md:w-[15%]">
          <Calendar28 />
        </div>
      </div>
      <TableDemo payload={filteredData ?? []} />
    </article>
  );
}
