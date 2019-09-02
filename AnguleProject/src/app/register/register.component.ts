import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map'

import {UserserviceService} from "../aservice/userservice.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   result:string
  constructor(private service:UserserviceService) { }

  ngOnInit() {
  }

  register(obj):void
  {
  	console.log(obj)
  	this.service.saveUser(obj).subscribe((d)=>this.result=d.msg)
  }

}
