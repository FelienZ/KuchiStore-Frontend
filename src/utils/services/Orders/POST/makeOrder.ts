import type { CreateOrder } from "@/utils/types/Orders/Actions/makeOrder"
import { Request } from "../../interceptor"

const API_URL = import.meta.env.VITE_API_URL
export default async function MakeOrder(payload: CreateOrder) {
    const {data: response} = await Request.post(`${API_URL}/api/orders/makeorder`, payload, {withCredentials: true})
    return (response)
}