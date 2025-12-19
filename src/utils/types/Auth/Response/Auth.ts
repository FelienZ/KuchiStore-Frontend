import type { Response } from "../../Response";
import type { User } from "./User";
import type { UserDetail } from "./UserDetail";

export interface Auth extends Response{
    payload?: User<UserDetail>
}