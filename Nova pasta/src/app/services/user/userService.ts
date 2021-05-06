
import { NavController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: "root"
})

export class UserService {
  form;

  constructor(private storage: Storage,
    private router: Router,
    private loadingCtrl: LoadingController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
  ) {


  }




  public setToken(token) {
    this.storage.set("token", token);
  }

  public getToken() {
    return this.storage.get("token");
  }


  public async logout() {
    await this.storage.clear();
    this.router.navigateByUrl("/login");
  }

  public async signup(data) {
    const loading = await this.loadingCtrl.create({
      message: 'Registrando...'
    });

    try {
      loading.present();
      await this.httpClient.post(`http://3.83.24.113:3333/places`, data)
        .toPromise();
      loading.dismiss();

      let message;
      message = 'Seu cadastro foi efetuado com sucesso.'

      const alert = await this.alertCtrl.create({
        header: 'Atenção',
        message: message,
        buttons: ['Ok']
      });

      await loading.dismiss();
      await alert.present();

      this.navCtrl.navigateForward("/login")
      return;
    } catch (res) {
      console.log(res);
      if (res.error && res.error.errors) {
        let message = '';
        res.error.errors.forEach(error => {
          message += `${error.message}<br>`
        });

        if (message === '') {
          message = 'Dados inválidos.'
        }

        const alert = await this.alertCtrl.create({
          header: 'Atenção',
          message: message,
          buttons: ['Ok']
        });

        loading.dismiss();
        alert.present();
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Atenção',
          message: 'Houve um problema de comunicação com o servidor.',
          buttons: ['Ok']
        });

        loading.dismiss();
        alert.present();
      }
    }
  }
}
