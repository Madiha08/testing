import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/apiwork/employee.service'; 

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

AddEmployee:any;
constructor(private fb:FormBuilder,private service:EmployeeService){}

ngOnInit():void{

  this.AddEmployee = this.fb.group({
    EmployeeName : this.fb.control(''),
    EmployeeAddress : this.fb.control(''),
    Contact : this.fb.control(''),
    Qualification : this.fb.control(''),
    EmployeeCode : this.fb.control(''),
    Department : this.fb.control(''),
    Role : this.fb.control(''),
    Grade : this.fb.control(''),
    Client : this.fb.control(''),
    Achievements : this.fb.control(''),

  })
}
  
  OnSubmitData(){
    this.service.AddData(this.AddEmployee.value).subscribe(a=>{
      console.log(a);
      console.log("AddEmployee Data successfully")
       })
        console.log(this.AddEmployee.value)
      }
  }


