import { ServiceService } from './../../services/service/serviceService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-grupo',
  templateUrl: './cadastrar-grupo.page.html',
  styleUrls: ['./cadastrar-grupo.page.scss'],
})
export class CadastrarGrupoPage implements OnInit {
  grupo: string;
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }
 async cadastrar(x){
    await this.serviceService.postGrupo(x);
  }
}
