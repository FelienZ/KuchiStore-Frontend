import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import { Request } from "../interceptor";

export default async function EditProfile(payload:UserDetail) {
    const {data: response} = await Request.put(`http://localhost:3000/api/users/editprofile`, payload, {withCredentials: true})
    return response
}