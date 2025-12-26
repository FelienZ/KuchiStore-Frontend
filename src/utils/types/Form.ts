import type React from "react";
import type { Dispatch, SetStateAction } from "react";

export interface FormAction<T>{
    type: 'Login Form' | 'Register Form',
    data: T,
    setData: Dispatch<SetStateAction<T>>
    isPending: boolean,
    HandleSubmit: (e: React.FormEvent)=> void
}