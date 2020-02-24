import { Component, OnInit } from '@angular/core';
import { Logout } from 'src/app/core/store/actions/auth.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {

  constructor(private store: Store) {}

  logout() {
    this.store.dispatch(new Logout());
  }

}
