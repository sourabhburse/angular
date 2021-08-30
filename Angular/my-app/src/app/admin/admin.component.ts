import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup
  submitted= false;
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.adminForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    
      
  });
  }

  get f() { return this.adminForm.controls; }

  onSubmit(){
    this.submitted = true;
    this.router.navigate(['/dashboard']);
  }

}
