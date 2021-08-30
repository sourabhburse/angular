import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-logindash',
  templateUrl: './logindash.component.html',
  styleUrls: ['./logindash.component.css']
})
export class LogindashComponent implements OnInit {
  //[x: string]: any;

  users:any;
  id:any;
  constructor(private s:AppService,private route: ActivatedRoute,private router:Router) { 
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  ngOnInit(): void {
    //this.loadUserById()
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );

      this.loadUserById()
    }
    loadUserById(){
      this.s.getUserById(this.id).subscribe(
        (response)=>{
          this.users = response;
          console.log(response)
        }
      )
    }
    logout(){
      this.router.navigate(['/login'])
    }
  }



