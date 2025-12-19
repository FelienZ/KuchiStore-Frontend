import { FormLogin } from "@/components/Common/Form/Login";
import useAuth from "@/hooks/useAuth";
import { userDummy } from "@/utils/data/UserDummy";
import ProtectedRoutes from "@/utils/util/Helper/protectedRoutes";
import useAccount from "@/utils/util/Hooks/Auth/useAccount";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginPage() {
  const type = 'Login Form'
  const [data, setData] = useState(userDummy)
  const { isLoading, isAuthenticated, isError } = useAuth()
  const {isPending, mutate} = useAccount(data.email, data.password)
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate(location.state?.from.pathname, { replace: true, viewTransition: true })
      }
      if(isError && !isAuthenticated){
          toast('Gagal Memgambil Data User')
      }
  }, [isAuthenticated, isLoading, navigate, isError, location])
  function HandleSubmit(e: React.FormEvent){
    e.preventDefault()
    mutate()
  }
  return (
    <section className="w-full h-full scrollbar-hide place-content-center place-items-center absolute">
      {(!isLoading && !isAuthenticated) ? (
        <FormLogin
          type={type}
          data={data}
          setData={setData}
          isPending={isPending}
          HandleSubmit={HandleSubmit}
        />
      ) : (
        <ProtectedRoutes/>
      )}
    </section>
  )
}
