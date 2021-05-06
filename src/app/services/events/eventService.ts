import { Injectable } from "@angular/core";

import {Subject} from 'rxjs';


@Injectable({
  providedIn: "root",
})
export class EventsService {
  constructor() {}

  private isLogged = new Subject<boolean>();
  
  public changeIsLogged(logged: boolean): void {
    this.isLogged.next(logged);
  }

  public getIsLogged(): Subject<boolean> {
    return this.isLogged;
  }
}
