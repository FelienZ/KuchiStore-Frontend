import useAuth from "@/hooks/useAuth";
import GetAccount from "@/utils/services/Auth/getAccount";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";

export default function useAccount(email: string, password: string){
    const {setAccount} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname
    return useMutation({
        mutationFn:()=> GetAccount(email, password),
        onSuccess: (data) => {
            setAccount!({
                id: data.payload!.id,
                username: data.payload!.username,
                email: data.payload!.email,
                detail: data.payload!.detail
            })
            navigate(from, {replace: true})
        },
    })
}