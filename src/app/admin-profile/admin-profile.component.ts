import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../servers/regservice.service';
import { Router } from '@angular/router';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {


  userDetails;
  userId='';
  loading=true;
  constructor(private service: RegserviceService, private router: Router) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.userId=this.userDetails.id;
        this.service.setid(this.userDetails._id);
        this.loading=false
        // console.log(res);
        // console.log(this.userDetails)
      },
      err => { 
        // console.log(err);
        
      });
  }
  onLogout(){
    this.service.deleteToken();
    this.router.navigate(['/login']);
  }

  w3_open() {
    document.getElementById("mySidebarprofile").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
w3_close() {
    document.getElementById("mySidebarprofile").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
}
