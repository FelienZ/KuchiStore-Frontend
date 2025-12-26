import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../Helper/QueryClientInstance";
import { toast } from "sonner";
import EditAccount from "@/utils/services/Account/editAccount";
import type { AccountProps } from "@/utils/types/Account/Account";

export default function useEditAccount(payload: AccountProps){
    return useMutation({
        mutationFn: ()=> EditAccount(payload),
        onSuccess: ()=> {
            queryClient.invalidateQueries({queryKey: ['me']})
            toast('Berhasil Memperbarui Akun')
        },
        onError: ()=> {
            toast('Gagal Memperbarui Akun')
        }
    })
}