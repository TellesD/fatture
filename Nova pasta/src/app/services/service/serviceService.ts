import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { UserService } from "../user/userService";
import { HttpClient } from "@angular/common/http";


import { NavController, LoadingController, AlertController } from "@ionic/angular";
import { EventsService } from '../events/eventService';
import { promise } from 'protractor';

@Injectable({
  providedIn: "root",
})
export class ServiceService{
  constructor(
    private userService: UserService,

    private httpClient: HttpClient,

   
    private alertCtrl: AlertController,
    
  ) {}

 


  public  getGrupo():  Promise<any> {
   const  id = this.userService.getToken
  
    return  this.httpClient.get<any>(`http://3.83.24.113:3333/places/1/service_group`).toPromise()
        
  }

  public  postGrupo(name):  Promise<any> {
    const  id = this.userService.getToken()
    console.log("chegou");
    console.log(name);

    return this.httpClient.post<any>(`http://3.83.24.113:3333/places/1/service_group`, {name}).toPromise() 
   }
  
   public  postPayment(data):  Promise<any> {
    const  id = this.userService.getToken()
    console.log("chegou");
    

    return this.httpClient.post<any>(`http://3.83.24.113:3333/places/pay`, data).toPromise() 
   }
   
   public  getPay(data):  Promise<any> {
    const  id = this.userService.getToken()
    console.log("chegou");
    

    return this.httpClient.post<any>(`http://3.83.24.113:3333/places/payShow`, data).toPromise() 
   }
   

   public  postService(grupoId,name):  Promise<any> {
   
   
    return this.httpClient.post<any>(`http://3.83.24.113:3333/service_group/${grupoId}/service`, {name}).toPromise() 
   }

   public  getService(grupoId):  Promise<any> {
   console.log(grupoId)
   
    return this.httpClient.get<any>(`http://3.83.24.113:3333/service_group/${grupoId}/service`).toPromise() 
   }

   public  postPrice(serviceId,value):  Promise<any> {
   
   
    return this.httpClient.post<any>(`http://3.83.24.113:3333/service/${serviceId}/price`, {value}).toPromise() 
   }


}
