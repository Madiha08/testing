import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyserviceService {
  constructor(private http:HttpClient) { }

  appUrl ="https://localhost:7260/vacacy"
  
  AddData(data:any){
      return  this.http.post(this.appUrl , data)
     }
  
     GetData(data:any){
      return  this.http.get(this.appUrl , data)
     }
     GetIdData(data:any){
      return  this.http.get(this.appUrl , data)
     }
}


