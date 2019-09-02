import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  update(obj):void{
  	console.log(obj)
  }

}
