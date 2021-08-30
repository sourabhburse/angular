import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
//import { Register } from '../register/register';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata ={}
  loginForm: FormGroup;
  submitted = false;
  users :any;
  id:any;
  uservalid=false;
  count =3;
  zero =0;
  tempuser : any;
  constructor(private formBuilder: FormBuilder,private auth:AppService,private router:Router) { }

  ngOnInit(): void {

    //this.loadUser()

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    
      
  });
  }

  loadUser(){
    this.auth.getUsers().subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }

  get f() { return this.loginForm.controls; }


  onSubmit():void{
    this.submitted = true;

    if(this.loginForm.valid){
          //console.log(res)
          this.auth.getUsers().subscribe(
            (res)=>{
              this.users =res;
              //console.log(this.users)
              for(var user of this.users){
                //console.log(user['username'])
                //console.log(user['password'])
                if(user['username'] === this.loginForm.get('username').value && user['password'] === this.loginForm.get('password').value && user['acceptTerms'] === "true")
                {
                  this.uservalid=true;
                  this.id = user['id']
                  console.log(this.id)
                  this.router.navigate(['/logindash' , this.id]);
                }
                else if(user['username'] === this.loginForm.get('username').value && user['password'] === this.loginForm.get('password').value && user['acceptTerms']!=="false"){
                  alert("Account locked contact admin");
                }
                else if(user['username'] === this.loginForm.get('username').value){
                  this.tempuser = user;
                  this.uservalid = false;
                  this.count--;
                  console.log(this.count);
                  alert("Invalid Password")
                }
                else if(this.count === 0){
                  this.tempuser['acceptTerms'] = "false";
                  this.auth.updateUserById(this.tempuser,this.tempuser['id']).subscribe(
                    (res)=>{
                      console.log(res);
                      alert("Account locked contact admin");

                    }
                  )
                }
              }
              // if(!this.uservalid)
              // {
              //   alert("Invalid username or password")
              // }
            }
          )
        }
  }
}


