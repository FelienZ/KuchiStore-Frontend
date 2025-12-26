import type { AuthState } from "@/utils/types/Auth/Request/Auth";
import { createContext } from "react";

const defaultState: AuthState = {
    account: null,
    isAuthenticated: false,
    isLoading: false,
    isError: false,
    login: ()=>{},
    revalidateAuth: ()=> {},
    logout: ()=> {}
}
export const AuthContext = createContext<AuthState>(defaultState)