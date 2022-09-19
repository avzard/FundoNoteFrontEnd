import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  Forgotpassword!: FormGroup;
  submitted = false;
  token : any;
  constructor(private formBuilder: FormBuilder, private user: UserserviceService,private route :ActivatedRoute) { }

  ngOnInit() {
    this.Forgotpassword = this.formBuilder.group({


      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

    });
    this.token = this.route.snapshot.paramMap.get('token');
    
  }
  get f() { return this.Forgotpassword.controls; }
onSubmit() {
  console.log(this.token);
  this.submitted = true;

  // stop here if form is invalid
  if (this.Forgotpassword.valid) {
    let reqdata={
      
      
      Password: this.Forgotpassword.value.password,
      confirmPassword: this.Forgotpassword.value.password
    }
    this.user.forgotpassword(reqdata,this.token).subscribe((response: any) =>{
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
