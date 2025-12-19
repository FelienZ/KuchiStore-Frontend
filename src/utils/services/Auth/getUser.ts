import type { Auth } from "@/utils/types/Auth/Response/Auth";
import axios from "axios";

export default async function GetUser(): Promise<Auth> {
    const {data: response} = await axios.get(`http://localhost:3000/api/users/me`, {withCredentials: true})
    return response
}