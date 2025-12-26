import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { User } from "@/utils/types/Auth/Response/User";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import { Calendar, Mail, Mars, User2, Venus } from "lucide-react";

type SummaryData = {
  payload: User<UserDetail>;
  navigation: "Profile" | "Account";
  handleSubmitProfile: () => void;
  handleSubmitAccount: () => void;
};
export default function Summary({
  payload,
  navigation,
  handleSubmitProfile,
  handleSubmitAccount,
}: SummaryData) {
  const account = payload;
  // console.log("cek pyload: ", payload.payload);
  const createdAt = account
    ? new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(account!.created_at!))
    : "No Data";
  return (
    <div className="flex max-lg:flex-col max-lg:justify-center items-center gap-3 border rounded-sm justify-between p-5 px-8">
      <Avatar className="border size-20 max-lg:self-center">
        <AvatarImage src="pp.png"></AvatarImage>
      </Avatar>
      <div className="flex flex-col w-full gap-2">
        <div className="flex max-lg:justify-center items-center gap-3">
          <h3 className="font-bold text-lg">{account?.username}</h3>
          <Badge variant={"outline"}>
            <User2 /> Guest
          </Badge>
        </div>
        <p className="max-lg:text-center">{account?.detail?.organization}</p>
        <div className="grid lg:grid-cols-[repeat(3,0.3fr)] gap-2 lg:divide-x">
          <div className="flex flex-col w-full gap-2 pr-2">
            <p className="text-sm">Email: </p>
            <Badge className="w-full" variant={"outline"}>
              <Mail /> {account?.email}
            </Badge>
          </div>
          <div className="flex flex-col w-full gap-2 pr-2">
            <p className="text-sm">Gender: </p>
            <Badge className="w-full" variant={"outline"}>
              {account.detail?.gender === "Wanita" ? <Venus /> : <Mars />}
              {account?.detail?.gender ?? "Unknown"}
            </Badge>
          </div>
          <div className="flex flex-col w-full gap-2 pr-2">
            <p className="text-sm">Joined At: </p>
            <Badge className="w-full" variant={"outline"}>
              <Calendar />
              {createdAt}
            </Badge>
          </div>
        </div>
      </div>
      {navigation === "Profile" ? (
        <Button onClick={handleSubmitProfile} className="max-lg:self-end">
          Edit Profile
        </Button>
      ) : (
        <Button onClick={handleSubmitAccount} className="max-lg:self-end">
          Edit Account
        </Button>
      )}
    </div>
  );
}
