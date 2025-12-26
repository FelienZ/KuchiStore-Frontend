import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectDemo } from "../Select";
import type { UserDetail } from "@/utils/types/Auth/Response/UserDetail";
import {
  Building2,
  Github,
  Info,
  Instagram,
  Linkedin,
  MapPin,
  Mars,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Item, ItemDescription } from "@/components/ui/item";

type ProfileActions = {
  profile: UserDetail;
  handleChange: (value: UserDetail) => void;
};

export default function ProfileForm({ profile, handleChange }: ProfileActions) {
  const gender = ["Pria", "Wanita"];
  return (
    <Card className="rounded-sm bg-background">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Update your personal details and profile information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" className="flex flex-col gap-3">
          <section className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <Badge>
                <MapPin />
                Address
              </Badge>
              <Input
                value={profile?.address}
                placeholder="Alamat Anda"
                onChange={(e) =>
                  handleChange({
                    ...profile,
                    address: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Mars />
                Gender
              </Badge>
              <SelectDemo
                defaultValue={profile?.gender}
                title="Gender Type"
                handleActions={(val) =>
                  handleChange({
                    ...profile,
                    gender: val as "Pria" | "Wanita",
                  })
                }
                items={gender}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Github /> Github
              </Badge>
              <Input
                value={profile?.github}
                placeholder="Github"
                onChange={(e) =>
                  handleChange({
                    ...profile,
                    github: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Linkedin /> LinkedIn
              </Badge>
              <Input
                value={profile?.linkedin}
                placeholder="LinkedIn"
                onChange={(e) =>
                  handleChange({
                    ...profile,
                    linkedin: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Instagram /> Instagram
              </Badge>
              <Input
                value={profile?.instagram}
                placeholder="Instagram"
                onChange={(e) =>
                  handleChange({
                    ...profile,
                    instagram: e.target.value,
                  })
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-2">
              <Badge>
                <Building2 /> Organization
              </Badge>
              <Input
                value={profile?.organization}
                placeholder="Organisasi Anda"
                onChange={(e) =>
                  handleChange({
                    ...profile,
                    organization: e.target.value,
                  })
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
