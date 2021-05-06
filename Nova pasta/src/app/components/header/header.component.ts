import { Component, OnInit, Input } from "@angular/core";

import { Platform, NavController } from "@ionic/angular";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  notification: any;
  pushes: any = [];
  isUserLogged: boolean = true;
  @Input() title:string;
  
  constructor(
   
    public plt: Platform,
    private navctrl: NavController,
    //private eventsService: EventsService,
  ) {
   
  }
  async ngOnInit() {
    /*
    this.eventsService.getIsLogged().subscribe((data) => {
      this.isUserLogged = data;
    });

    this.isUserLogged = await this.storage.get("token") ? true: false;
    
    this.getNotification();
  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic("enappd");*/
  }
 
  open(x: any) {
    if (!this.notification) this.navctrl.navigateForward(x);
  }
}