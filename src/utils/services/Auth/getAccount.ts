import type { Auth } from "@/utils/types/Auth/Response/Auth";
import { toast } from "sonner";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL
export default async function GetAccount(email: string, password: string): Promise<Auth>{
    try {
        const {data: response} = await Request.post(`${API_URL}/api/auth/login`, {email, password}, {withCredentials: true})
        toast('Berhasil Login!')
        return response
    } catch (error) {
        toast('Gagal Login, Kredensial Tidak Valid')
        return {
           type: 'fail',
           message: typeof error === 'object' ? ('message' in error! ?  String(error.message) : '') : '' 
        }
    }
}