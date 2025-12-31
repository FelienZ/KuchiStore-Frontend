import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
export const Request = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true
})

let auhtorized = false

export function RequestInterceptor(logout:()=> void){
    Request.interceptors.response.use(
        (res) => {            
            if(!auhtorized){
                auhtorized = true
            }            
            return res
        },
        (error) =>{                        
            if(!auhtorized && error.response?.status === 401){
                //flag agar tidak recall
                auhtorized = true
                logout()
            }
            if(error.response?.status === 401){
                logout()
            }
            return Promise.reject()
        }
    )
}