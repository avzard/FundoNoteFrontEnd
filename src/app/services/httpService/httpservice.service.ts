import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl=environment.baseurl;

  constructor(private httpClient: HttpClient) { }
  postService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
    return this.httpClient.post(this.baseUrl+url,reqdata,token&&httpOptions)
  }
  
  putService(url:string,reqdata:any,token: boolean=false,httpOptions:any={}){
    return this.httpClient.put(this.baseUrl+url,reqdata,token&&httpOptions)
  }
 
}
