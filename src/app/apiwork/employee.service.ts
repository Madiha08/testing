import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http:HttpClient) { }

  appUrl ="https://localhost:7280/Employeee"
  
  AddData(data:any){
      return  this.http.post(this.appUrl , data)
     }
     GetData(data:any){
      return  this.http.get(this.appUrl , data)
     }

     UpdateData(data:any){
      return  this.http.put(this.appUrl , data)
     }
     DeleteData(data:any){
      return  this.http.delete(this.appUrl , data)
     }
}
