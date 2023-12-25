import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OurservicessService {

  constructor(private http:HttpClient) { }

  appUrl ="https://localhost:7129/service"
  
  AddData(data:any){
      return  this.http.post(this.appUrl , data)
     }
     Addget(data:any){
      return  this.http.get(this.appUrl , data)
     }
     GetIdData(data:any){
      return  this.http.get(this.appUrl , data)
     }
     UpdateData(data:any){
      return  this.http.put(this.appUrl , data)
     }
     DeleteData(data:any){
      return  this.http.delete(this.appUrl , data)
     }
}
