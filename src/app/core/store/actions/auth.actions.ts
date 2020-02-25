import { AuthStateModel, Authenticate } from '../model/auth.model';
import { UserModel } from '../model/user.model';

// export class Login{
//     static readonly type = '[Auth] Login';
//     constructor(public payload: {username: string, password: string}){}
// }

// export class Logout{
//     static readonly type = '[Auth] Logout';
// }

export class Login {
    static readonly type = '[Login Page] Login';

    constructor(public payload: Authenticate) {}
  }

  export class LoginSuccess {
    static readonly type = '[Auth API] Login Success';

    constructor(public payload: { user: UserModel }) {}
  }

  export class LoginFailure {
    static readonly type = '[Auth API] Login Failure';

    constructor(public payload: any) {}
  }

  export class Logout {
    static readonly type = '[Auth] Confirm Logout';
  }

  export class LogoutConfirmed {
    static readonly type = '[Auth] Logout Confirmed';
  }

  export class LogoutCancelled {
    static readonly type = '[Auth] Logout Cancelled';
  }

  export class LogoutComplete {
    static readonly type = '[Auth API] Logout Complete';
  }
