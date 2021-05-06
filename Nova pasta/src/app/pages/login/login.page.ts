import { AuthService } from './../../services/auth/authService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public list: FormGroup;
  constructor(public fbuilder: FormBuilder, public authService:AuthService) {}

  ngOnInit() {
    this.list = this.fbuilder.group({
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          ),
        ]),
      ],

      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  public login() {
    if (this.list.valid) {
      this.authService.login(
        this.list.get("email").value,
        this.list.get("password").value
      );
    }
  }

}
