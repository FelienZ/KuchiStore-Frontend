import type { Order } from "@/utils/types/Orders/order";
import { Request } from "../../interceptor";
import type { OrderData } from "@/utils/types/Orders/orderData";
import type { OrderProduct } from "@/utils/types/Orders/orderProduct";

const API_URL = import.meta.env.VITE_API_URL;
export default async function GetOrders(): Promise<Order<OrderData<OrderProduct>>> {
    const {data: response} = await Request.get(`${API_URL}/api/orders/getorder`, {withCredentials: true})
    return response
}