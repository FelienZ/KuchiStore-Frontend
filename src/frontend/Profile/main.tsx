import useAuth from "@/hooks/useAuth";
import LoadingFull from "../Loading";
import Summary from "./Summary";
import { useState } from "react";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import { Button } from "@/components/ui/button";
import useEditProfile from "@/utils/util/Hooks/Account/useEditProfile";
import { toast } from "sonner";
import useEditAccount from "@/utils/util/Hooks/Account/useEditAccount";
import type { AccountProps } from "@/utils/types/Account/Account";
import ProfileForm from "@/components/Common/Card/Profile";
import AccountForm from "@/components/Common/Card/Account";

type FormNavigation = "Profile" | "Account";
export default function Profile() {
  const { account, isLoading } = useAuth();
  const accountData: AccountProps = {
    username: account!.username!,
    email: account!.email!,
    newPassword: "",
    oldPassword: "",
    confirmPassword: "",
  };
  const [data, setData] = useState<AccountProps>(accountData);
  const [profile, setProfile] = useState<UserDetail>(account!.detail!);
  const [navigation, setNavigation] = useState<FormNavigation>("Profile");
  const { mutate: mutateProfile, isPending: isPendingProfile } =
    useEditProfile(profile);
  const { mutate: mutateAccount, isPending: isPendingAccount } =
    useEditAccount(data);
  function handleUpdateProfile() {
    if (profile === account?.detail)
      return toast("Silahkan Perbarui Informasi Anda");
    return mutateProfile();
  }
  function handleUpdateAccount() {
    if (
      data.email.trim() === "" ||
      data.newPassword.trim() === "" ||
      data.oldPassword.trim() === "" ||
      data.username.trim() === "" ||
      data.confirmPassword.trim() === ""
    )
      return toast("Silahkan Lengkapi Data");
    if (data.confirmPassword !== data.newPassword)
      return toast("Password Tidak Cocok");
    return mutateAccount();
  }
  return isLoading || isPendingProfile || isPendingAccount ? (
    <LoadingFull />
  ) : (
    <article className="flex flex-col font-[Roboto] gap-5 justify-center min-h-screen place-self-center w-[85%] xl:w-[60%]">
      <Summary
        payload={account!}
        navigation={navigation}
        handleSubmitProfile={handleUpdateProfile}
        handleSubmitAccount={handleUpdateAccount}
      />
      <div className="grid gap-3 grid-cols-2 bg-background border rounded-sm p-3">
        <Button
          onClick={() => setNavigation("Profile")}
          variant={"secondary"}
          className={
            navigation === "Profile"
              ? "bg-accent drop-shadow-sm text-foreground border"
              : "bg-transparent text-foreground border"
          }
        >
          Profile
        </Button>
        <Button
          onClick={() => setNavigation("Account")}
          variant={"secondary"}
          className={
            navigation === "Account"
              ? "bg-accent drop-shadow-sm text-foreground border"
              : "bg-transparent text-foreground border"
          }
        >
          Account
        </Button>
      </div>
      {navigation === "Profile" ? (
        <ProfileForm
          profile={profile!}
          handleChange={(value: UserDetail) => setProfile(value)}
        />
      ) : (
        <AccountForm
          account={data!}
          handleChange={(value: AccountProps) => setData(value)}
        />
      )}
    </article>
  );
}
