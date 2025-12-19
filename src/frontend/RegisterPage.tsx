import { FormRegister } from "@/components/Common/Form/Register";
import { registerDummy } from "@/utils/data/RegisterDummy";
import useAccount from "@/utils/util/Hooks/Auth/useAccount";
import { useState } from "react";
export function RegisterPage() {
  const type = 'Register Form'
  const [data, setData] = useState(registerDummy)
  // next ganti untuk register schema
  const {isPending, mutate} = useAccount(data.email, data.password)
  function HandleSubmit(e: React.FormEvent){
    e.preventDefault()
    mutate()
  }
  return (
    <section className="w-full h-full scrollbar-hide place-content-center place-items-center absolute">
      <FormRegister
        type={type}
        data={data}
        setData={setData}
        isPending={isPending}
        HandleSubmit={HandleSubmit}
      />
    </section>
  )
}
