import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface usuario{
  email:string;
  passw:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user!:usuario;
  ausx!:usuario;
  login:FormGroup;

  constructor(private form:FormBuilder, private route:Router) {
    this.login = this.form.group({
      email:['', Validators.required],
      passw:['', Validators.required]
    })

    this.user = {
      email: "camilo@gmail.com",
      passw: "123123"
    };
  }

  ngOnInit(): void {
  }

  public entrar(): void{
    this.ausx = this.login.value;
    if(this.ausx.email == this.user.email && this.ausx.passw == this.user.passw){
      this.route.navigate(['/admin'])
    } else{
      console.log("Ayudame señor!");
    }
  }
}
