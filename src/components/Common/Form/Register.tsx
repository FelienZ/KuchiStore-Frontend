import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "../../ui/spinner";
import type { FormAction } from "@/utils/types/Form";
import { useNavigate } from "react-router";
import type { Register } from "@/utils/types/Auth/Request/Register";

export function FormRegister({
  type,
  HandleSubmit,
  setData,
  data,
  isPending,
}: FormAction<Register>) {
  const navigate = useNavigate();
  return (
    <Card className="w-[30%] max-md:w-[80%] rounded-sm">
      <CardHeader>
        <CardTitle className="text-center">{type}</CardTitle>
      </CardHeader>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <CardContent>
          <div className="flex flex-col gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                onChange={(e) => setData({ ...data, username: e.target.value })}
                placeholder="Username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
                placeholder="Masukkan Password"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Confirm Password</Label>
              </div>
              <Input
                type="password"
                onChange={(e) => setData({ ...data, confirm: e.target.value })}
                placeholder="Masukkan Konfirmasi Password"
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col mt-8 gap-2">
          <Button disabled={isPending} type="submit" className="w-full">
            Register
            {isPending ? <Spinner /> : ""}
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full"
          >
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
