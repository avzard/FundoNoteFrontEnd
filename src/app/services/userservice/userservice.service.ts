import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpserviceService) { }
  registration(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }
  login(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/Login',reqdata,false,header)
  }
  forgotpassword(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService('/User/ResetPassword',reqdata,false,header)
  }
  forgotemail(reqdata:any){
    console.log(reqdata);
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
        
      })
    }
    return this.httpService.postService(`/User/ForgetPassword?Email=${reqdata.Email}`,reqdata,false,header)
  }
}
