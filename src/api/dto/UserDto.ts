import { IRole } from './RoleDto';

export interface IUser {
  id: string;
  name: string;
  login: string;
  lastName: string | null;
}

export type IUserAdd = Pick<IUser, 'name' | 'lastName' | 'login'> & {
  password: string;
  roleId: Pick<IRole, 'id'>;
};

export type IUserEdit = Partial<IUserAdd> & { id: string };
