import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private user:UserserviceService, private router:Router) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
        
          
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        
    });        
}
get f() { return this.LoginForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.LoginForm.valid) {
    let reqdata={
      
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password,
      
    }
    this.user.login(reqdata).subscribe((response: any) =>{
      console.log(response);
      localStorage.setItem("token",response.data)
      this.router.navigateByUrl("dashboard/note");
    }
    ) 
  }
  
}
onReset() {
  this.submitted = false;
  this.LoginForm.reset();
}

}
