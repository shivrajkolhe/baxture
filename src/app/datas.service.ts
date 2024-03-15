import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  private message: any= new BehaviorSubject("Default");
  currentMessage = this.message.asObservable(); // Corrected typo
  constructor() { }

  getData(){
    return this.currentMessage;
  }

  setData(dt:any){
    this.message.next(dt);
  }
}
