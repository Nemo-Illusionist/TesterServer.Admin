import {IRole} from "./RoleDto";
import {IMeta} from "../../utils/interfaces";

export interface IUser {
    id: string;
    name: string;
    login: string;
    lastName: string | null;
}

export interface IUsers {
    data: IUser[];
    meta: IMeta;
}

export type IUserAdd = Pick<IUser, "name" | "lastName" | "login"> & {
    password: string;
    roleId: Pick<IRole, "id">;
};

export type IUserEdit = Partial<IUserAdd> & {id: string};
