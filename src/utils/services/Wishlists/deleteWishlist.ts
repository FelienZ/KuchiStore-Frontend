import { Request } from "../interceptor"

export default async function DeleteWishlist(payload: string) {
    const {data: response} = await Request.delete(`http://localhost:3000/api/wishlists/deletewishlist/${payload}`, {withCredentials: true})
    return response
}