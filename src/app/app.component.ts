import { Component } from '@angular/core';
import { RegserviceService } from './servers/regservice.service';
import * as $ from 'jquery';
import decode from 'jwt-decode'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state=false;
  isAdmin=false
  constructor(private service:RegserviceService) {
  }
click(){
  this.service.deleteToken();
  this.state=false;
  this.isAdmin=false;
  this.ngOnInit()
}
js(){
  
  $("#toggle").click(function() {
     // alert('aaaa')
      $(this).toggleClass('on');
      $("#resize").toggleClass("active");

      });
}
  ngOnInit() {
      if(this.service.isLoggedIn()){
      this.state=true;
      const token =this.service.getToken();
          const tokenPayload = decode(token);
    if(tokenPayload.role == "admin")
    this.isAdmin=true}

  
  }

  // isAdmin(){
  //  let token= this.service.getToken();
  //  let tokenPayload=decode(token)
  //  if(tokenPayload.role=="admin")
  //  return true;
  //  return false

  // }

  w3_open() {
    if (document.getElementById("mySidebar").style.display === 'block') {
      document.getElementById("mySidebar").style.display = 'none';
    } else {
      document.getElementById("mySidebar").style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  w3_close() {
      document.getElementById("mySidebar").style.display = "none";
  }
  onClick(element) {
  }
}
