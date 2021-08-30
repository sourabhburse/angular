import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../validation';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private s:AppService, private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
          street: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
          city: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
          //state: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
          zip: ['',[Validators.required]],
        
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        //acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(data:any): void {
    this.submitted = true;

    if (this.form.valid) {
      this.s.registerUser(data).subscribe((result)=>{
        console.warn(result)
        this.router.navigate(['/login']);
      })
    }
    


    // this.s.registerUser(data).subscribe(
    //   (response)=>{
    //     console.log(response);
    //   }
    // )
    
    
    

    //console.log(JSON.stringify(this.form.value, null, 6));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
function address(arg0: { fullname: (string | import("@angular/forms").ValidatorFn)[]; username: (string | import("@angular/forms").ValidatorFn[])[]; email: (string | ((control: AbstractControl) => import("@angular/forms").ValidationErrors)[])[]; password: (string | import("@angular/forms").ValidatorFn[])[]; confirmPassword: (string | ((control: AbstractControl) => import("@angular/forms").ValidationErrors))[]; acceptTerms: (boolean | ((control: AbstractControl) => import("@angular/forms").ValidationErrors))[]; }, arg1: { validators: import("@angular/forms").ValidatorFn[]; }, address: any, arg3: FormGroup): FormGroup {
  throw new Error('Function not implemented.');
}

