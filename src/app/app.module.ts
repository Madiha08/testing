import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServiceComponent } from './component/service/service.component';
import { BlogComponent } from './component/blog/blog.component';
import { DetailComponent } from './component/detail/detail.component';
import { PriceComponent } from './component/price/price.component';
import { TeamComponent } from './component/team/team.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { EmployeeComponent } from './Admin/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { PanelComponent } from './Admin/panel/panel.component';
import { EmployeeDetailComponent } from './Admin/employee-detail/employee-detail.component';
import { OurservicesComponent } from './Admin/ourservices/ourservices.component';
import { VacancydetailsComponent } from './Admin/vacancydetails/vacancydetails.component';
import { OurservicedetailsComponent } from './Admin/ourservicedetails/ourservicedetails.component';
import { OurserviceupdateComponent } from './Admin/ourserviceupdate/ourserviceupdate.component';
import { EmployeeupdateComponent } from './Admin/employeeupdate/employeeupdate.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { VacancyUpdateComponent } from './Admin/vacancy-update/vacancy-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ServiceComponent,
    BlogComponent,
    DetailComponent,
    PriceComponent,
    TeamComponent,
    TestimonialComponent,
    EmployeeComponent,
    VacancyComponent,
    PanelComponent,
    EmployeeDetailComponent,
    OurservicesComponent,
    VacancydetailsComponent,
    OurservicedetailsComponent,
    OurserviceupdateComponent,
    EmployeeupdateComponent,
    AdminLoginComponent,
    EmployeeComponent,
    VacancyUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
