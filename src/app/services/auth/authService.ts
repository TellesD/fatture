import { Injectable } from "@angular/core";
import { UserService } from "../user/userService";
import { HttpClient } from "@angular/common/http";


import { NavController, LoadingController, AlertController } from "@ionic/angular";
import { EventsService } from '../events/eventService';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private userService: UserService,

    private httpClient: HttpClient,

    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private eventsService: EventsService
  ) {}

 


  public async login(email: string, password: string) {
    const auth = {
      email,
      password,
      fcm: "kasodkaso",
    };
    const loading = await this.loadingCtrl.create({
      message: 'Autenticando...'
    });
    try {
      loading.present();
      
      const response: any = await this.httpClient
      .post(`http://3.83.24.113:3333/places/auth`, auth)
      .toPromise();

      loading.dismiss();

      if (response) {
        this.userService.setToken(response);
        this.eventsService.changeIsLogged(true);
        this.navCtrl.navigateForward('/faturamento');
      }
    } catch(err) {
      let message;
     
      if(err.status === 401) {
        message = 'E-mail ou senha inválidos.'
      } else {
        message = 'Houve uma falha na comunicação com o servidor.'
      }

      const alert = await this.alertCtrl.create({
        header: 'Atenção',
        message: message,       
        buttons: ['Ok']
      });
      loading.dismiss();
      alert.present();
    }
    
  }

  public logout() {
    this.eventsService.changeIsLogged(false);
    this.userService.logout();
  }
}
