import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServService } from '../services/serv.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder ,private empService: ServService,private route:Router) {
  }
   data=
   {
     username:"",
     password:""
   }
  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
  
    console.log(this.loginForm)
     this.empService.getLogin(this.data).subscribe(res=>{
      console.log(res)
      this.route.navigateByUrl('profile')

     },
     //Error
     err=>{
       console.log(err)
       alert(err.error.detail)
     }
     )
  }

}
