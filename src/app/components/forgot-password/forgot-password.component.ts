import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  Forgotpassword!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService) { }

  ngOnInit() {
    this.Forgotpassword = this.formBuilder.group({


      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

    });

  }
  get f() { return this.Forgotpassword.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.Forgotpassword.valid) {
    let reqdata={
      
      
      password: this.Forgotpassword.value.password,
      newPassword: this.Forgotpassword.value.confirmPassword,
    }
    this.user.forgotpassword(reqdata).subscribe((response: any) =>{
      console.log(response);
    }
    ) 
  }
  
}
onReset() {
  this.submitted = false;
  this.Forgotpassword.reset();
}
}
