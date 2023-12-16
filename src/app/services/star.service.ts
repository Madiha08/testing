import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private http:HttpClient) { }

  appUrl ="https://localhost:7280/Employeee"

  
  
     
  
  AddData(data:any){
      return  this.http.post(this.appUrl , data)
     }
}
