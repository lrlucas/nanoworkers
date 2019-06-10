import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public style = {
    url: 'url(./assets/images/background/login-register.jpg)'
  };

  public loginform: FormGroup;
  public styleForm = 'block';
  public styleForm2 = 'none';
  public userEmailReset: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    init_plugins();

    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public alternarEstilo() {
    this.styleForm = this.toggleStyle(this.styleForm);
    this.styleForm2 = this.toggleStyle(this.styleForm2);
  }

  public toggleStyle(v) {
    return { block: 'none', none: 'block' }[v];
  }

  public sendEmailResetAndResetClass() {
    if (this.userEmailReset && this.userEmailReset.includes('@')) {
      console.log(this.userEmailReset);
      this.alternarEstilo();
    }
  }

  public submit() {
    if (this.loginform.invalid) {
      return;
    }
    console.log(this.loginform.value)
  }

}
