import { Component, OnInit } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { EventsService } from './services/events/eventService';
import { Storage } from '@ionic/storage';
import { AuthService } from './services/auth/authService'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public isUserLogged: boolean = false;
  public appPages = [
    {
      title: "Login",
    
      isAuthenticated: false,
    },
    
    {
      title: 'Lançamento',
      url: 'lancamento',
      isAuthenticated: true,
    },
    
    {
      title: 'Cadastrar serviço',
      url: 'cadastrar-servico',
      isAuthenticated: true,
    },
    {
      title: 'Cadastrar grupo de serviço',
      url: 'cadastrar-grupo',
      isAuthenticated: true,
    },
    {
      title: 'Adicionar profissional',
      url: 'add-professional',
      isAuthenticated: true,
    },
    {
      title: 'Serviços',
      url: 'service',
      isAuthenticated: true,
    },
    {
      title: 'Buscar faturamento',
      url: 'faturamento',
      isAuthenticated: true,
    },
    {
      title: 'Sair',
      isAuthenticated: true,
    },
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private eventsService: EventsService,
    private storage: Storage,
    private authService: AuthService,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

 async initializeApp() {
    this.isUserLogged = await this.storage.get('token') ? true: false;
    if(this.isUserLogged) {
      this.navCtrl.navigateRoot('faturamento');
    } else {
      this.navCtrl.navigateRoot('login');
    }
    this.eventsService.getIsLogged().subscribe((data) => {
      this.isUserLogged = data;
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  public goToFunc(page) {
    if(page.title === 'Sair') {
      this.authService.logout();
    }
    else if(page.title === 'Lançamento') {
      this.navCtrl.navigateRoot('lancamento');
    }
    else if(page.title === 'Cadastrar serviço') {
      this.navCtrl.navigateRoot('cadastrar-servico');
    }
    else if(page.title === 'Cadastrar grupo de serviço') {
      this.navCtrl.navigateRoot('cadastrar-grupo');
    }
    else if(page.title === 'Adicionar profissional') {
      this.navCtrl.navigateRoot('add-professional');
    }
    else if(page.title === 'Serviços') {
      this.navCtrl.navigateRoot('service');
    }
     else if(page.title === 'Buscar faturamento') {
      this.navCtrl.navigateRoot('faturamento');
    }
  }


}
