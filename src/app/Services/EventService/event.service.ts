import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  pageIndex:any;  
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  
  sendClickEvent() {
   console.log('click')
   this.subject.next(this.getEvent());
  }
  sendClickEventUser() {
    console.log('click')
    this.subject2.next(this.getEventUser());
   
   }
   getEventUser():Observable<any>{
     return this.subject2.asObservable();
   }

  getEvent():Observable<any>{
    return this.subject.asObservable();
  }
 

 
}
