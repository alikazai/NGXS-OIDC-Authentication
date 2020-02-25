import { Authenticate, AuthStateModel } from '../store/model/auth.model';
import { UserModel } from '../store/model/user.model';
import { throwError, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


// const mockUser = {token: null, access:{username: 'ali', password:'alipass'}, user: {name: 'ali', email: 'ali.karim@caxtonfx.com'}};
const mockUser = {name: 'ali', email:'ali.karim@caxtonfx.com'};

@Injectable({
  providedIn: 'root'
})
export class AuthService{
    private loggedIn = false;

    login(auth: Authenticate): Observable<UserModel> {
        // if (auth.username !== 'ngconf') {
        //   return throwError('Invalid username or password');
        // }

        this.loggedIn = true;
        return of(mockUser);
      }

      logout() {
        this.loggedIn = false;
        return of(true);
      }

      check() {
        return of(this.loggedIn ? mockUser : null);
      }
}
