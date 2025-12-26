import axios from "axios";

export const Request = axios.create({
    baseURL: `http://localhost:3000/api`,
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