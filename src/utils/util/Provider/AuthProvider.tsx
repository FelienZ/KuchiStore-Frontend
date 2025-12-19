/* eslint-disable react-hooks/set-state-in-effect */
import { AuthContext } from "@/context/AuthContext";
import type { User } from "@/utils/types/Auth/Response/User";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import type React from "react";
import { useEffect, useState } from "react";
import useUser from "../Hooks/Auth/useUser";

export default function AuthProvider({children}: {children: React.ReactNode}){
    const dummy = {
        id: null,
        username: null,
        email: null,
        detail: null
    }
    const [account, setAccount] = useState<User<UserDetail>>(dummy)
    const {data, isLoading, isError} = useUser()
    useEffect(()=>{
        if(data?.payload){
            setAccount({
                id: data.payload.id,
                username: data.payload.username,
                email: data.payload.email,
                detail: data.payload.detail
            })
        }
    }, [data])
    const isAuthenticated = !!account.id
    return(
        <AuthContext.Provider value={{account, setAccount, isAuthenticated, isLoading, isError}}>
            {children}
        </AuthContext.Provider>
    )
}