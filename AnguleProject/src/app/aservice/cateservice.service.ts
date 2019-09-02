import { Injectable } from '@angular/core';

import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class CateserviceService {

  category : any	
  constructor(private http:Http) 
  { }

  getAll():any
  {
     return this.http.get('http://localhost:7898/category/get','').map((response)=>response.json())
  }

  save(obj):any
  {
      return this.http.post('http://localhost:7898/category/save',obj).map((response)=>response.json())
  }
}
