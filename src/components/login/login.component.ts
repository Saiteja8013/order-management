import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    submitted = false;
     loginForm: any = FormGroup;
     showError: boolean = false;
    userDetails =[{
      usename:"Saiteja",
      password: "Sai123456@"
    }]
    constructor(private formBuilder: FormBuilder,private router: Router) {}
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        if((this.loginForm.controls.username.value!=this.userDetails[0].usename ||
          this.loginForm.controls.password.value!=this.userDetails[0].password) && !this.loginForm.invalid){
            this.showError = true;
          }else{
            this.router.navigate(['/orders'])
          }
        if (this.loginForm.invalid) {
            return;
        }
    }
}
