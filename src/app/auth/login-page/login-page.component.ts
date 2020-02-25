import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Authenticate, AuthStateModel } from 'src/app/core/store/model/auth.model';
import { Login } from 'src/app/core/store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //error$ = this.store.select(fromStore.selectLoginPageError);
  //pending$ = this.store.select(fromStore.selectLoginPagePending);

  constructor(private store: Store) {}

  ngOnInit() {}

  onLogin(credentials: Authenticate) {
    this.store.dispatch(new Login(credentials));
  }

}
