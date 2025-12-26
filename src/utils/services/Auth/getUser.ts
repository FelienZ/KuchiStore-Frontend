import type { Auth } from "@/utils/types/Auth/Response/Auth";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL
export default async function GetUser(): Promise<Auth> {
    const {data: response} = await Request.get(`${API_URL}/api/users/me`, {withCredentials: true})
    return response
}
