import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service/serviceService';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.page.html',
  styleUrls: ['./faturamento.page.scss'],
})
export class FaturamentoPage implements OnInit {
  grupos: {
    id: any,
    name: any,
    createdAt: any,
    updatedAt: any,
  };
  formPay;
   services: {
    
    service: any,
    price: any,
    
  };
  constructor(private serviceService: ServiceService, private formBuilder: FormBuilder) {
    this.formPay = this.formBuilder.group({
      'dataStart': [null, Validators.compose([Validators.required])],
      'dataEnd': [null, Validators.compose([Validators.required])]
    });
  }


  ngOnInit() {
    this.getGrupo();
  }
  getGrupo() {
    this.serviceService.getGrupo().then((x) => {
      this.grupos = x;
    })
  }
  getPay() {
    if (this.formPay.valid) {
      const data = {
        salon_Id: 3,
        dateStart: this.formPay.get("dataStart").value,
        dateEnd: this.formPay.get("dataEnd").value
      }
      console.log(data.dateStart);
      console.log(data.dateEnd);

      this.serviceService.getPay(data).then((x)=>{
        this.services=x
      })

    }
  }
}

