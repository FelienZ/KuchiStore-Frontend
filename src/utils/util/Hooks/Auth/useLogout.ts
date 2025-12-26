import { useMutation } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";
import Logout from "@/utils/services/Auth/logout";
import { queryClient } from "../../Helper/QueryClientInstance";

export default function useLogout(){
    const {logout} = useAuth()
    return useMutation({
        mutationFn: ()=> Logout(),
        onSuccess: ()=> {
            logout()
            queryClient.clear()
            toast('Berhasil Logout')
        }
    })
}