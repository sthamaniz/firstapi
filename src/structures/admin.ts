import { User } from "./user";

export interface Admin {
    id:number;
    role:string;
    user:User;
    created_at:Date;
};