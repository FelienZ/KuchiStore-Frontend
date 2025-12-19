import { Spinner } from "@/components/ui/spinner";
import useAuth from "@/hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";

export default function ProtectedRoutes(){
    const {isAuthenticated, isLoading} = useAuth()
    const location = useLocation()
    if(isLoading){
        return (<section className="flex items-center justify-center w-full h-full gap-3">
            Loading..
            <Spinner/>
        </section>)
    }
    return isAuthenticated ? (
        <section className="w-screen min-h-screen m-5 scrollbar-hide">
            <Outlet/>
        </section>
    ) : (
    <Navigate to={'/login'} replace state={{from: location}}/>
    )
}