import { Request } from "@/utils/services/interceptor";

const API_URL = import.meta.env.VITE_API_URL;
export default async function getProductsByCategory(payload: string) {
    const {data: response} = await Request.get(`${API_URL}/api/products/category?type=${payload}`)
    return response
}