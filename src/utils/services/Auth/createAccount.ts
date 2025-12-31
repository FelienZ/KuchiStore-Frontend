import type { Register } from "@/utils/types/Auth/Request/Register";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL;
export default async function CreateAccount(payload: Register){
    const {data: response} = await Request.post(`${API_URL}/api/auth/register`, payload)
    return response
}