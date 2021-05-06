import { ServiceService } from './../../services/service/serviceService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-servico',
  templateUrl: './cadastrar-servico.page.html',
  styleUrls: ['./cadastrar-servico.page.scss'],
})
export class CadastrarServicoPage implements OnInit {
  grupos: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  };
  serviceId:any;
  formService: FormGroup;
  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder) { 
    this.formService = this.formBuilder.group({
			'grupoId': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'price': [null, Validators.compose([Validators.required])]
		});
  }

  ngOnInit() {
    this.getGrupo()

  }
  getGrupo() {
    this.serviceService.getGrupo().then((x) => {
      this.grupos = x;
    })
  }
  setService(){
    if (this.formService.valid) {
      const data = {
        grupoId: this.formService.get("grupoId").value,
        name: this.formService.get("name").value,  
        price: this.formService.get("price").value
      }
    this.serviceService.postService(data.grupoId,data.name).then((x)=>{
      this.serviceId= x.id; 
      this.serviceService.postPrice(this.serviceId,data.price).then((y)=>{
        
      })
    })
    }
    
  }
}
