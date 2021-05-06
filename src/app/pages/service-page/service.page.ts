import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service/serviceService';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  services: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  };
  grupos: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  };
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getGrupo()
  }
  getGrupo() {
    this.serviceService.getGrupo().then((x) => {
      this.grupos = x;
    })
  }
  getService(x) {
    console.log(x);
    this.serviceService.getService(x).then((x) => {
      this.services = x;
    })
  }
}
