import type { Order } from "@/utils/types/Orders/order";
import { Request } from "../../interceptor";
import type { OrderData } from "@/utils/types/Orders/orderData";
import type { OrderProduct } from "@/utils/types/Orders/orderProduct";

export default async function GetOrders(): Promise<Order<OrderData<OrderProduct>>> {
    const {data: response} = await Request.get(`http://localhost:3000/api/orders/getorder`, {withCredentials: true})
    return response
}