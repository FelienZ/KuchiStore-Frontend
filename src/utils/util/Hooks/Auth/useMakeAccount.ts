import CreateAccount from "@/utils/services/Auth/createAccount";
import type { Register } from "@/utils/types/Auth/Request/Register";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useMakeAccount(payload: Register){
    const navigate = useNavigate()
    return useMutation({
        mutationFn: ()=> CreateAccount(payload),
        onSuccess: ()=> {
            toast('Berhasil Daftar')
            navigate('/', {viewTransition: true})
        }
    })
}