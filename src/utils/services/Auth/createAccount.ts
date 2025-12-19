import type { Register } from "@/utils/types/Auth/Request/Register";
import axios from "axios";

export default async function CreateAccount(payload: Register){
    const {data: response} = await axios.post(`http://localhost:3000/api/auth/register`, payload)
    return response
}