import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Authenticate } from 'src/app/core/store/model/auth.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() error: string | null;

  @Input() set disabled(isDisabled: boolean) {
    if (isDisabled) {
      this.loginForm.disable();
    } else {
      this.loginForm.enable();
    }
  };

  @Output() submitted = new EventEmitter<Authenticate>();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  ngOnInit() {}

  submit() {
    const value: Authenticate = this.loginForm.value;

    if (this.loginForm.valid) {
      this.submitted.emit(value);
    }
  }
}