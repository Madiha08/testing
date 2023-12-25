import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  constructor(private http:HttpClient) { }
  appUrl ="https://localhost:7210/api/Authenticate/api/ "


  login(data : any){
    return this.http.post(this.appUrl + "login" , data)
  }}
