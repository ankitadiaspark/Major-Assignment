import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http : Http) { }

  saveUser(obj):any
  {
  	return this.http.post("http://localhost:7898/user/save",obj).map((response)=>response.json())
  }

  loginUser(obj):any
  {
  	return this.http.post("http://localhost:7898/user/login",obj).map((response)=>response.json())
  }
}
