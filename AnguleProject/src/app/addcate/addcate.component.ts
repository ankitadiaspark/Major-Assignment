import { Component, OnInit } from '@angular/core';
import {CateserviceService} from '../aservice/cateservice.service'
@Component({
  selector: 'app-addcate',
  templateUrl: './addcate.component.html',
  styleUrls: ['./addcate.component.css']
})
export class AddcateComponent implements OnInit {

result:string
  constructor(private service:CateserviceService) { }

  ngOnInit() {
  }

  add(obj):void
  {
   this.service.save(obj).subscribe((data)=>this.result=data.msg)
  }

}
