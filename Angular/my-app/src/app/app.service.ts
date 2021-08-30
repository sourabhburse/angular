import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Register } from './register/register';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {
   URL = "http://localhost:3000/";
   //login_URL ="http://localhost:3000/auth/login"
  constructor(private http: HttpClient) { }

  registerUser(data){
    return this.http.post<Register>(this.URL+"users",data)
  }
  
  getUsers(){
    return this.http.get(this.URL+"users")
  }

  deleteUser(id:number){
    return this.http.delete(this.URL+"users/"+id)
  }

  getUserById(id:number){
    return this.http.get<Register>(this.URL+"users/"+id)
  }

  updateUserById(user,id){
    return this.http.put(this.URL+"users/"+id,user)
  }
}
