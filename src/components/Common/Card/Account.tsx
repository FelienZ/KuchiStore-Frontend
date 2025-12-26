import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Item, ItemDescription } from "@/components/ui/item";
import type { AccountProps } from "@/utils/types/Account/Account";
import { Info, KeyRound, Mail, User2 } from "lucide-react";

type AccountActions = {
  account: AccountProps;
  handleChange: (value: AccountProps) => void;
};
export default function AccountForm({ account, handleChange }: AccountActions) {
  return (
    <Card className="rounded-sm bg-background">
      <CardHeader>
        <CardTitle>Your Account</CardTitle>
        <CardDescription>
          Update your personal Account information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="flex flex-col gap-3">
          <section className="grid gap-5">
            <div className="flex flex-col gap-2">
              <Badge>
                <User2 />
                Username
              </Badge>
              <Input
                value={account!.username!}
                placeholder="Username"
                onChange={(e) =>
                  handleChange({ ...account, username: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Mail />
                Email
              </Badge>
              <Input
                value={account!.email!}
                placeholder="email@example.com"
                onChange={(e) =>
                  handleChange({ ...account, email: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <KeyRound />
                Old Password
              </Badge>
              <Input
                value={account!.oldPassword!}
                placeholder="Password Sebelumnya"
                onChange={(e) =>
                  handleChange({ ...account, oldPassword: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <KeyRound />
                New Password
              </Badge>
              <Input
                value={account!.newPassword!}
                placeholder="Password Baru"
                onChange={(e) =>
                  handleChange({ ...account, newPassword: e.target.value })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <KeyRound />
                Confirm Password
              </Badge>
              <Input
                value={account!.confirmPassword!}
                placeholder="Konfirmasi Password Baru"
                onChange={(e) =>
                  handleChange({ ...account, confirmPassword: e.target.value })
                }
              ></Input>
            </div>
          </section>
        </form>
      </CardContent>
      <CardFooter>
        <Item
          variant={"outline"}
          className="w-full dark:bg-blue-800/30 bg-blue-500/60 border-blue-700/70 backdrop-blur-sm dark:shadow-lg dark:border-blue-800"
        >
          <ItemDescription className="flex items-center gap-3 text-white">
            <Info size={16} /> Untuk menyimpan perubahan, tekan tombol edit di
            atas.
          </ItemDescription>
        </Item>
      </CardFooter>
    </Card>
  );
}
