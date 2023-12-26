import { Component , OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from 'src/app/apiwork/admin-login.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  AdminLogin:any;
  constructor(private fb:FormBuilder,private service:AdminLoginService,private router:Router){}
  ngOnInit(): void {
  
    this.AdminLogin = this.fb.group({
    AdminName : this.fb.control(''),
    Password : this.fb.control('')
    })

  }

  OnSubmitData(){
      //console.log(this.AdminLogin.value) ;//
      this.service.login(this.AdminLogin.value).subscribe(a=>{
        console.log(a);

        //let token = JSON.stringify(a);
        console.log(a)
        
      // let spliToken = token.split('"');

      //console.log(spliToken[3])

        localStorage.setItem('loginToken', JSON.stringify(a))
        
    alert("login successfully")
        this.router.navigate(["panel"])
      })

}
}
