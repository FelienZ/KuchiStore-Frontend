import type { AccountProps } from "@/utils/types/Account/Account";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL
export default async function EditAccount(payload: AccountProps) {
    const {data: response} = await Request.put(`${API_URL}/api/users/editaccount`, payload, {withCredentials: true})
    return response
}