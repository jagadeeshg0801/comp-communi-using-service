import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-prof-details',
  templateUrl: './user-prof-details.component.html',
  styleUrls: ['./user-prof-details.component.css']
})
export class UserProfDetailsComponent implements OnInit {

  user_personal_data:any = null;
  profForm: any;
  constructor(private userService: UserServiceService, private fb: FormBuilder) {
    this.userService.getUserData().subscribe((data)=>{
      console.log('personal data', data);
      this.user_personal_data = data;
    }) 
  
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.profForm = this.fb.group({
      desig: [''],
      grade: ['']
    })
  }

  submitData(){
    let prof_formData = this.profForm.value; // professional data
    let personal_formData = this.user_personal_data; // personal data
    let final_data = {...personal_formData, ...prof_formData};
    console.log('final data', final_data)
    this.userService.updateUserData(final_data, '/contactDetails')
  }

}
