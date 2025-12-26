import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL
export default async function Logout(){
    const {data: response} = await Request.delete(`${API_URL}/api/auth/logout`, {withCredentials: true})
    return response
}