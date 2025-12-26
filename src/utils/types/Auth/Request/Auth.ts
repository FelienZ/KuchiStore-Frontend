import type { User } from "../Response/User"
import type { UserDetail } from "../Response/UserDetail"

export type AuthState = {
    account: User<UserDetail> | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    isError: boolean,
    login: (data: User<UserDetail>)=>void,
    revalidateAuth: ()=> void,
    logout: ()=> void
}