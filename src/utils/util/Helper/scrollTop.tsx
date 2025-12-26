import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollHelper(){
    const pathName = useLocation()
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [pathName])
    return null
}