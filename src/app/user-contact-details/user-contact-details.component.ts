import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-contact-details',
  templateUrl: './user-contact-details.component.html',
  styleUrls: ['./user-contact-details.component.css']
})
export class UserContactDetailsComponent implements OnInit {
  user_personal_prof_data:any;

  constructor(private userService: UserServiceService, private fb: FormBuilder) {
    this.userService.getUserData().subscribe((data)=>{
      console.log('personal data', data);
      this.user_personal_prof_data = data;
    }) 
  
  }

  ngOnInit(): void {
  }

}
