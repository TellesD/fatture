import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { UserService } from '../services/user/userService';
import { NavController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  
  constructor(private storage: Storage, private navCtrl: NavController, private menuCtrl: MenuController ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    let haveToken: Observable<boolean> = new Observable(observer => {
      if(state.url == '/login' || state.url == '/sign-up') {
        this.menuCtrl.swipeGesture(false);
      } else {
        this.menuCtrl.swipeGesture(true);
      }
      this.storage.get("token").then((token) => {
        
        if(token){
          if(state.url == '/login'||state.url == '/sign-up') {
            this.navCtrl.navigateRoot('/faturamento');
            return observer.next(false);  
          }

          return observer.next(true);
        } 
          
        else {
          if(state.url == '/login'|| state.url == '/sign-up') {
            return observer.next(true);  
          }
           
          observer.next(false);
        } 
      })
    })
    return haveToken;    
  }  
}
