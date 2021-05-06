import { ServiceService } from './../../services/service/serviceService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './lancamento.page.html',
  styleUrls: ['./lancamento.page.scss'],
})
export class LancamentoPage implements OnInit {
  public folder: string;
  grupos: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  };

  services: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  }
  formService: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private serviceService: ServiceService,
    private formBuilder: FormBuilder) { 
      this.formService = this.formBuilder.group({
        'client': [null, Validators.compose([Validators.required])],
        'service_group': [null, Validators.compose([Validators.required])],
        'service': [null, Validators.compose([Validators.required])],
        'price': [null, Validators.compose([Validators.required])]
      });
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

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
  setPayment() {
    const data = {
      salon_Id: 3,
      client: this.formService.get("client").value, 
      service_group: this.formService.get("service_group").value,
      service: this.formService.get("service").value,  
      price: this.formService.get("price").value
    }
     this.serviceService.postPayment(data).then((x)=>{
       console.log(x);
     })
  }
}
