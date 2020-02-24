import { Component, OnInit } from '@angular/core';
import { ofActionDispatched, Actions } from '@ngxs/store';
import { Router } from '@angular/router';
import { Logout } from './core/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private actions: Actions, private router: Router) {}

  ngOnInit() {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  title = 'NGXS-AuthApp';
}
