import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OurservicessService } from 'src/app/apiwork/ourservicess.service';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent {
  AddSevices:any;
  constructor(private fb:FormBuilder,private service:OurservicessService){}
  
  ngOnInit():void{
    this.AddSevices = this.fb.group({
      name : this.fb.control(''),
      email : this.fb.control(''),
    Department : this.fb.control(''),
     
    
  })
}
OnSubmitData(){
  this.service.AddData(this.AddSevices.value).subscribe(a=>{
    console.log(a);
    console.log("AddSevices Data successfully")
     })
      console.log(this.AddSevices.value)
    }


}
