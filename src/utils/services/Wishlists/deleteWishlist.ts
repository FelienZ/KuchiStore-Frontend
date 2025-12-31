import { Request } from "../interceptor"

const API_URL = import.meta.env.VITE_API_URL;
export default async function DeleteWishlist(payload: string) {
    const {data: response} = await Request.delete(`${API_URL}/api/wishlists/deletewishlist/${payload}`, {withCredentials: true})
    return response
}