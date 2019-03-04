import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import {RegserviceService } from '../servers/regservice.service';
import { AppComponent } from '../app.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:RegserviceService,private router:Router,private state:AppComponent) { }

  model ={
    email :'',
    password:''
  };
  isAdmin:boolean;
  roll='';
  serverErrorMessages: string;
loading=false

  ngOnInit() {
    this.loading=false
          const token =this.service.getToken();
          const tokenPayload = decode(token);
    if(this.service.isLoggedIn())
    if(tokenPayload.role == "admin")
    this.router.navigateByUrl('/admin');
    else
    this.router.navigateByUrl('/userprofile')
    // this.isAdmin=false;
  }
 
  
    onSubmit(form : NgForm){
      this.loading=true
      this.service.login(form.value).subscribe(
        res => {
          this.service.setToken(res['token']);
          const token =this.service.getToken();
          const tokenPayload = decode(token);
          this.loading=false
          // console.log(tokenPayload.role);
        if(tokenPayload.role == "admin"){
         this.router.navigateByUrl('/admin');
          this.state.state=true;
        this.isAdmin=true}
          else{
            this.router.navigateByUrl('/userprofile');
            this.state.state=true;
            this.isAdmin=false
          }
          this.state.ngOnInit()
        },
        err => {
          this.serverErrorMessages = err.error.message;
          this.loading=false
          // setTimeout(this.serverErrorMessages = '', 3000);
          // this.serverErrorMessages=''
        }
      );
    }

}
