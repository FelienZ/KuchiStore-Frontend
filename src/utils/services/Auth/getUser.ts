import type { Auth } from "@/utils/types/Auth/Response/Auth";
import { Request } from "../interceptor";

export default async function GetUser(): Promise<Auth> {
    const {data: response} = await Request.get(`http://localhost:3000/api/users/me`, {withCredentials: true})
    return response
}
