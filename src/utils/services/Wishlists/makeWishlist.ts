import { toast } from "sonner";
import { Request } from "../interceptor";

export default async function MakeWishlist(payload: string) {
    try {
        const {data: response} = await Request.post(`http://localhost:3000/api/wishlists/addwishlist/${payload}`, null, {withCredentials: true})
        return response
    } catch (error) {
        toast('Gagal Menambahkan Wishlist')
        throw error
    }
}