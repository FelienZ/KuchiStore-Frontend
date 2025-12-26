import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Order } from "@/utils/types/Orders/order";
import type { OrderData } from "@/utils/types/Orders/orderData";
import type { OrderProduct } from "@/utils/types/Orders/orderProduct";
import { Badge } from "../ui/badge";

export function TableDemo({
  payload: order,
}: Pick<Order<OrderData<OrderProduct>>, "payload">) {
  const totalPrice = order
    ? order?.map((o) => o.total_price).reduce((prev, curr) => prev + curr, 0)
    : "N/A";
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="bg-secondary h-15">
          <TableHead className="w-[100px]">NO.</TableHead>
          <TableHead>Picture</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead className="text-center">Category</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Total</TableHead>
        </TableRow>
      </TableHeader>
      {order.length ? (
        <TableBody className="max-h-[80vh] overflow-y-scroll scrollbar-hide">
          {order?.map((o, idx) => (
            <TableRow key={o.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>
                <img
                  className="size-12 border rounded-xs p-1"
                  src={o.product.url}
                  alt={o.product.name}
                />
              </TableCell>
              <TableCell>{o.product.name}</TableCell>
              <TableCell className="text-center">{o.product.type}</TableCell>
              <TableCell className="text-center">
                {o.product.price
                  ?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .split(",00")}
              </TableCell>
              <TableCell className="text-center">{o.qty}</TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={
                    o.status === "canceled" ? "destructive" : "secondary"
                  }
                >
                  {o.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                {o.total_price
                  ?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .split(",00")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      ) : (
        <TableBody className="h-[75vh] overflow-y-scroll scrollbar-hide">
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              Pemesanan Sedang Kosong!
            </TableCell>
          </TableRow>
        </TableBody>
      )}
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}></TableCell>
          <TableCell className="text-center">Total</TableCell>
          <TableCell className="text-center">
            {totalPrice
              ?.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
              .split(",00")}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
