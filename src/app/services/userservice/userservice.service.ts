import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token: any;
  constructor(private httpService: HttpserviceService) { this.token = localStorage.getItem("token") }
  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.httpService.postService('/User/Register', reqdata, false, header)
  }
  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.httpService.postService('/User/Login', reqdata, false, header)
  }
  forgotpassword(reqdata: any,token:any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token
      })
    }
    return this.httpService.putService(`/User/ResetPassword?password=${reqdata.Password}&newPassword=${reqdata.confirmPassword}`, {}, true, header)
  }
  forgotemail(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',

      })
    }
    return this.httpService.postService(`/User/ForgetPassword?Email=${reqdata.Email}`, reqdata, false, header)
  }
}
