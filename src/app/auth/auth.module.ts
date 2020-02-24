import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPromptComponent } from './logout-prompt/logout-prompt.component';
import { AuthGuard } from '../core/auth.guard';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserHomeComponent, LoginFormComponent, LoginPageComponent, LogoutPromptComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: UserHomeComponent, canActivate: [AuthGuard] },
    ]),
  ]
})
export class AuthModule { }
