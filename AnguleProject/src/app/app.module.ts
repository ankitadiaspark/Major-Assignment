import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { FacultyhomeComponent } from './facultyhome/facultyhome.component';
import { StudentnavComponent } from './studentnav/studentnav.component';
import { FacultynavComponent } from './facultynav/facultynav.component';
import { StudentProfileComponent } from './studentprofile/studentprofile.component';
import { AddcateComponent } from './addcate/addcate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    StudenthomeComponent,
    FacultyhomeComponent,
    StudentnavComponent,
    FacultynavComponent,
    StudentProfileComponent,
    AddcateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"",
        component: HomeComponent
      },
      {
         path:"contact",
         component: ContactComponent
      },
      {
        path:"register",
        component: RegisterComponent
      },
      {
         path:"login",
         component: LoginComponent
      },
      {
        path:"student",
        component: StudenthomeComponent
      },
      {
        path:"faculty",
        component: FacultyhomeComponent
      },
      {
        path:"studprofile",
        component: StudentProfileComponent
      },
      {
        path:"addcate",
        component:AddcateComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
