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
import type { Login } from "@/utils/types/Auth/Request/Login";
import { useNavigate } from "react-router";

export function FormLogin({
  type,
  HandleSubmit,
  setData,
  data,
  isPending,
}: FormAction<Login>) {
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
          </div>
        </CardContent>
        <CardFooter className="flex-col mt-8 gap-2">
          <Button disabled={isPending} type="submit" className="w-full">
            Login
            {isPending ? <Spinner /> : ""}
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/register")}
            variant="outline"
            className="w-full"
          >
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
