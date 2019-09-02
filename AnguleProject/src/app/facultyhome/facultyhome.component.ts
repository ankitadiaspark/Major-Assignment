import { Component, OnInit } from '@angular/core';

import {CateserviceService} from '../aservice/cateservice.service'

@Component({
  selector: 'app-facultyhome',
  templateUrl: './facultyhome.component.html',
  styleUrls: ['./facultyhome.component.css']
})
export class FacultyhomeComponent implements OnInit 
{
  catestatus:boolean
  category : any
  constructor(private service:CateserviceService) { 
  	this.service.getAll().subscribe((data)=>
  	{
  			this.catestatus = data.status
  			this.category   = data.data
  	})
  }

  ngOnInit() {
  }

}
