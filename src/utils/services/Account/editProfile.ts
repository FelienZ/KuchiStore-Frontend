import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL;
export default async function EditProfile(payload:UserDetail) {
    const {data: response} = await Request.put(`${API_URL}/api/users/editprofile`, payload, {withCredentials: true})
    return response
}