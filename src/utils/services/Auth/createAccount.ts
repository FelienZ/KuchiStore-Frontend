import type { Register } from "@/utils/types/Auth/Request/Register";
import { Request } from "../interceptor";

export default async function CreateAccount(payload: Register){
    const {data: response} = await Request.post(`http://localhost:3000/api/auth/register`, payload)
    return response
}