import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public style = {
    url: 'url(./assets/images/background/login-register.jpg)'
  };

  public registerform: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    init_plugins();

    this.registerform = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  public submitRegister() {
    console.log(this.registerform.value);
  }

}
