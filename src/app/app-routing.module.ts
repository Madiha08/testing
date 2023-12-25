import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { DetailComponent } from './component/detail/detail.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ServiceComponent } from './component/service/service.component';
import { PriceComponent } from './component/price/price.component';
import { TeamComponent } from './component/team/team.component';
import { BlogComponent } from './component/blog/blog.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { PanelComponent } from './Admin/panel/panel.component';
import { EmployeeDetailComponent } from './Admin/employee-detail/employee-detail.component';
import { VacancyComponent } from './Admin/vacancy/vacancy.component';
import { OurservicesComponent } from'./Admin/ourservices/ourservices.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

const routes: Routes = [
  {path :'',component:HomeComponent},
  {path :'about',component:AboutComponent},
  {path :'contact',component:ContactComponent},
  {path :'detail',component:DetailComponent},
  {path :'blog',component:BlogComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'service',component:ServiceComponent},
  {path:'price',component:PriceComponent},
  {path:'team',component:TeamComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'panel',component:PanelComponent},
  {path:'EmployeeDetail',component:EmployeeDetailComponent},
  {path:'Vacancy',component:VacancyComponent},
  {path:'ourservices',component:OurservicesComponent},
  {path:'AdminLogin',component:AdminLoginComponent}

];

@NgModule({
  declarations:[],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
