import { Request } from "../interceptor";

export default async function Logout(){
    const {data: response} = await Request.delete(`http://localhost:3000/api/auth/logout`, {withCredentials: true})
    return response
}