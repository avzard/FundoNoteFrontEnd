import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {
  token:any;
  noteId: any;
  constructor(private httpService: HttpserviceService) {
    this.token=localStorage.getItem('token');
   }
   
   addnote(reqdata: any  ) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
  }
  getallnote(){
    console.log();
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ this.token 
      })
    }
    return this.httpService.getService('/Notes/Read',true,header)
   }
}
