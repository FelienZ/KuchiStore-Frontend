import type { AccountProps } from "@/utils/types/Account/Account";
import { Request } from "../interceptor";

export default async function EditAccount(payload: AccountProps) {
    const {data: response} = await Request.put(`http://localhost:3000/api/users/editaccount`, payload, {withCredentials: true})
    return response
}