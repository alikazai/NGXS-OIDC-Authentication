import { Component, OnInit } from '@angular/core';
import { ofActionDispatched, Actions, Store, Select } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from './core/store/actions/auth.actions';
import { AuthState } from './core/store/state/auth.state';
import { Observable } from 'rxjs';
import { AuthStateModel } from './core/store/model/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // constructor(private actions: Actions, private router: Router) {}

  // ngOnInit() {
  //   this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
  //     this.router.navigate(['/login']);
  //   });
  // }
  // onLogout() {
  //   this.store.dispatch(new Logout());
  // }
  @Select(AuthState) loggedIn$: Observable<AuthStateModel["token"]>;

  constructor(private store: Store) {}

  onLogout() {
    this.store.dispatch(new Logout());
  }

  title = 'NGXS-AuthApp';
}