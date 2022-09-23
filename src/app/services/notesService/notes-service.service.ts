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
   updateNote(reqdata: any,notesID:any) {
   console.log(reqdata.notesID)
     console.log("token", this.token)
  
     let header = {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + this.token
       })
     }
     return this.httpService.putService(`/Notes/Update?noteId=${reqdata.notesID}`, reqdata, true, header)
   }
  deleteNote( noteid: any) {
    console.log(noteid)
    console.log("token", this.token)
  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.deleteService(`/Notes/Delete?noteid=${noteid}`,true, header)
  }
  Trashnote( noteid: any) {
    console.log(noteid)
    console.log("token", this.token)
  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.putService(`/Notes/Trash?noteId=${noteid}`,noteid,true, header)
  }
  ArchiveNote( noteid: any) {
    console.log(noteid)
    console.log("token", this.token)
  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    
    return this.httpService.putService(`/Notes/Archive?noteId=${noteid}`,noteid,true, header)
  }
  colorPallete( noteid: any, color:any){
    console.log("token",this.token);
  
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
   }
   return this.httpService.putService(`/Notes/Color?noteId=${noteid}&color=${color}`,color, true, header)
  }
}
