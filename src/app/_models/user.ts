import { Role } from "./role";

export class User {
  id: number;
  Name: string;
  Admin_code:any
  save_time: number;
  usercode: string;
  role: Role;
  token?: string;
}
