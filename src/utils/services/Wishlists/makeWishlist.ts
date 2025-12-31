import { toast } from "sonner";
import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL;
export default async function MakeWishlist(payload: string) {
    try {
        const {data: response} = await Request.post(`${API_URL}/api/wishlists/addwishlist/${payload}`, null, {withCredentials: true})
        return response
    } catch (error) {
        toast('Gagal Menambahkan Wishlist')
        throw error
    }
}