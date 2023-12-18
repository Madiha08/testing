import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
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
import { EmployeeComponent } from './component/employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { HeadComponent } from './Admin/head/head.component'

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
    HeadComponent
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
