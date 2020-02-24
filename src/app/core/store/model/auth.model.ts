import { UserModel } from './user.model';

export interface AuthStateModel{
    token: string | null;
    access: Authenticate;
    user: UserModel;  
}

export interface Authenticate {
    username: string;
    password: string;
  }