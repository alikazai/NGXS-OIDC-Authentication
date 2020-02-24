import { State, Selector, Action, StateContext } from '@ngxs/store'
import { AuthService } from '../../Services/auth.service';
import { Login, Logout } from '../actions/auth.actions';
import { AuthStateModel } from '../model/auth.model';
import { tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Injectable } from '@angular/core';



@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: null,
        access: null,
        user: null
      }
})
@Injectable()
export class AuthState{
    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }
  
    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }

    constructor(private authService: AuthService){}

    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, action: Login){
        return this.authService.login(action.payload).pipe(
            tap((result) => {
                patchState({
                    token: result.token,
                    user: action.payload.user
                });
            })
          );
    }

  @Action(Logout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    //const state = getState();
    return this.authService.logout().pipe(
      tap(() => {
        setState({
          token: null,
          access: null,
          user: null
        });

      })
    );
  }
}