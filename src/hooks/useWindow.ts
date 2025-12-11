import { useEffect, useState } from "react";

export default function useWidth(){
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleWidthChange(){
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidthChange)
        return(()=> window.removeEventListener('resize', handleWidthChange))
    }, [])
    return width
}