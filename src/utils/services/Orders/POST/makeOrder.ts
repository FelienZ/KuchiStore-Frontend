import type { CreateOrder } from "@/utils/types/Orders/Actions/makeOrder"
import { Request } from "../../interceptor"

export default async function MakeOrder(payload: CreateOrder) {
    const {data: response} = await Request.post(`http://localhost:3000/api/orders/makeorder`, payload, {withCredentials: true})
    return (response)
}