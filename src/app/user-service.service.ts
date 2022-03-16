import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // Subject Creation
  userSubject = new Subject(); // nothing holds

  //Behavior Subject Creation
  userBehavSubject=  new BehaviorSubject({});
  constructor(private router: Router) { }

  updateUserData(formData:any, routerURL:string){ // null/ new Data
    this.userBehavSubject.next(formData); // holds update data and remove previous state data
    this.router.navigate([routerURL])
  }

  getUserData(){
    return this.userBehavSubject;
  }
}
