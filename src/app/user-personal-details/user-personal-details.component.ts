import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-personal-details',
  templateUrl: './user-personal-details.component.html',
  styleUrls: ['./user-personal-details.component.css']
})
export class UserPersonalDetailsComponent implements OnInit {

  personalForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['']
    })
  }

  submitData(){
    if(this.personalForm.valid){
      console.log('form data', this.personalForm.value);
      let formData =  this.personalForm.value;
      this.userService.updateUserData(formData, '/profDetails');
    }
    else{
      alert('Invalid Form Data')
    }
  }

}
