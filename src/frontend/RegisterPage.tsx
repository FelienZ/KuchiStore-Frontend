import { FormRegister } from "@/components/Common/Form/Register";
import { registerDummy } from "@/utils/data/RegisterDummy";
import useMakeAccount from "@/utils/util/Hooks/Auth/useMakeAccount";
import { useState } from "react";
import { toast } from "sonner";
export function RegisterPage() {
  const type = "Register Form";
  const [data, setData] = useState(registerDummy);
  // next ganti untuk register schema
  const { isPending, mutate, isError } = useMakeAccount({
    email: data.email,
    password: data.password,
    confirm: data.confirm,
    username: data.username,
  });
  function HandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      data.username.trim() === "" ||
      data.password.trim() === "" ||
      data.email.trim() === "" ||
      data.confirm.trim() === ""
    )
      return toast("Silahkan Lengkapi Data");
    if (data.confirm !== data.password) return toast("Password Tidak Cocok");
    if (isError) return toast("Gagal Mendaftarkan Akun");
    mutate();
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
  );
}
