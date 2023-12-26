import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {


  constructor(private http:HttpClient) { }
  appUrl ="https://localhost:7167/api/Authenticate/api/"


  login(data : any){
    return this.http.post(this.appUrl + "Login" , data)
  }}
