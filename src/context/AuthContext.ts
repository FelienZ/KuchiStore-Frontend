import type { AuthState } from "@/utils/types/Auth/Request/Auth";
import { createContext } from "react";

const defaultState: AuthState = {
    account: null,
    setAccount: null,
    isAuthenticated: false,
    isLoading: false,
    isError: false
}
export const AuthContext = createContext<AuthState>(defaultState)