import { Request } from "../interceptor";

export default async function GetWishlist() {
    const {data: response} = await Request.get(`http://localhost:3000/api/wishlists/getwishlist`, {withCredentials: true})
    return response
}
