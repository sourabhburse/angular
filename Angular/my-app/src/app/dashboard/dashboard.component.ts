import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:any;
  showMe:boolean= false;
  
  constructor(private s:AppService,private router:Router) { 
    this.loadProducts();

  }

  ngOnInit(): void {
  }

  loadProducts(){
    this.s.getUsers().subscribe(
      (response)=>{
        this.users=response;
      }
    )
  }

  deleteUser(u:any){
    this.s.deleteUser(u.id).subscribe(
      (res)=>{
        alert("User deleted")
        this.loadProducts()
      }
    )
  }
  logout(){
    this.router.navigate(['/login'])
  }

}
