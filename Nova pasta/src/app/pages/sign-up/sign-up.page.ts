import { UserService } from './../../services/user/userService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public list: FormGroup;
  constructor(public fbuilder: FormBuilder, public userService: UserService) {
    this.list = this.fbuilder.group({
      name: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      doc: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      address_numb: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      fantasy_name: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      birthday: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      cep: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
      adress: ["", Validators.compose([Validators.required, Validators.maxLength(100)])],
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
    if (this.list.valid) {
      const data = {
        name: this.list.get("name").value,
        cpf: this.list.get("doc").value,
        number: this.list.get("cellphone").value,
        email: this.list.get("email").value,
        password: this.list.get("password").value,
        address_numb: this.list.get("address_numb").value,
        fantasy_name: this.list.get("fantasy_name").value,
        birthday: this.list.get("birthday").value,
        cep: this.list.get("cep").value,
        address: this.list.get("adress").value,
        city: this.list.get("city").value,

       
      }
      this.userService.signup(data);
    }
  }
  ngOnInit() {
  }

}