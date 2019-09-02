import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserserviceService} from "../aservice/userservice.service"

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result:string
  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit() {
  }

  login(obj):any
  {
    console.log(obj)
  	this.service.loginUser(obj).subscribe((d)=>
    {
        if(d.status==false)
          this.result = "ID or Password Wrong !"
        else
        {
            console.log("EX Res")
            console.log(d.data[0])
           if(d.data[0].type=="1") 
            this.router.navigate(['student'])
          else  
             this.router.navigate(['faculty'])
        }
    })
 
  }

}
