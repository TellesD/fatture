import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public list: FormGroup;
  constructor(public fbuilder: FormBuilder) {
    this.list = this.fbuilder.group({
      name: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      doc: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      fantasy_name: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      birthday: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      cep: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      neighborhood: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      city: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      cellphone: ["", Validators.compose([
        Validators.required,
        Validators.minLength(15),
      ])],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
          ),
          Validators.minLength(9),
        ]),
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }
  cadastrar() {
    /*if (this.list.valid) {
      const data = {
        name: this.list.get("name").value,
        cellphone: this.list.get("cellphone").value,
        email: this.list.get("email").value,
        password: this.list.get("password").value
      }
      this.userService.signup(data);
    }*/
  }
  ngOnInit() {
  }

}