import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../Helper/QueryClientInstance";
import { toast } from "sonner";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import EditProfile from "@/utils/services/Account/editProfile";

export default function useEditProfile(payload: UserDetail){
    return useMutation({
        mutationFn: ()=> EditProfile(payload),
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey: ['me']})
            toast('Berhasil Memperbarui Profile')
        },
        onError: ()=> {
            toast('Gagal Memperbarui Profile')
        }
    })
}