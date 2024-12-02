import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';
import { forbiddenNameValidator } from 'src/app/shared/user-name.validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private fb: FormBuilder){}

  registrationForm=this.fb.group({
    name:['', [Validators.required, forbiddenNameValidator]],
    email: ['',[Validators.required,Validators.email]],
  password: [''],
  confirmPassword: [''],
  address: this.fb.group({
    city:[''],
    state:[''],
    postalCode: ['']
  })
  },{validator:PasswordValidator});
loadApi(){
  this.registrationForm.setValue({
  name: 'Ghanishth',
  email: 'gh12@gmail.com',
  password: 'test',
  confirmPassword: 'test',
  address: {
   city:'Gaya',
   state:'Bihar',
   postalCode: '82345'
  }
  });
}

}
