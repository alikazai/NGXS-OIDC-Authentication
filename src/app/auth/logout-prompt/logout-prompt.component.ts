import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({

  selector: 'app-logout-prompt',
  templateUrl: './logout-prompt.component.html',
  styleUrls: ['./logout-prompt.component.scss']
})
export class LogoutPromptComponent{

  constructor(
    private ref: MatDialogRef<LogoutPromptComponent>,
  ) {}

  cancel() {
    this.ref.close(false);
  }

  confirm() {
    this.ref.close(true);
  }

}
