import type { Dispatch, SetStateAction } from "react"
import type { User } from "../Response/User"
import type { UserDetail } from "../Response/UserDetail"

export type AuthState = {
    account: User<UserDetail> | null,
    setAccount: Dispatch<SetStateAction<User<UserDetail>>> | null,
    isAuthenticated: boolean,
    isLoading: boolean,
    isError: boolean
}