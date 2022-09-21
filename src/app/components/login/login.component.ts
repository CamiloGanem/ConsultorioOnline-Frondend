import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;

  constructor(private form:FormBuilder) {
    this.login = this.form.group({
      email:['', Validators.required],
      passw:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  public create(){
    console.log(this.login.value)
  }
}
