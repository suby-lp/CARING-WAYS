import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ServService } from '../serv.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder ,private empService: ServService) {
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

     },
     err=>{
       console.log('error')
     }
     )
  }

}
