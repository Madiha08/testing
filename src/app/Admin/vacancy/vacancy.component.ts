import { Component } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { VacancyserviceService } from 'src/app/apiwork/vacancyservice.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent {
  AddVacancy:any;
  constructor(private fb:FormBuilder,private service:VacancyserviceService){}
  
  ngOnInit():void{
    this.AddVacancy = this.fb.group({
      name : this.fb.control(''),
      email : this.fb.control(''),
      Address : this.fb.control(''),
      phonenumber : this.fb.control(''),
      city : this.fb.control(''),
      Qualification : this.fb.control(''),
      ApplyingFeild : this.fb.control(''),
      Experience : this.fb.control(''),
    
  })
  }
  OnSubmitData(){
    this.service.AddData(this.AddVacancy.value).subscribe(a=>{
      console.log(a);
      console.log("AddVacancy Data successfully")
       })
        console.log(this.AddVacancy.value)
      }


    }

