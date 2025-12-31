import { Request } from "../interceptor";

const API_URL = import.meta.env.VITE_API_URL;
export default async function GetWishlist() {
    const {data: response} = await Request.get(`${API_URL}/api/wishlists/getwishlist`, {withCredentials: true})
    return response
}
