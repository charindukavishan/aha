import { Component, OnInit } from '@angular/core';
import { RegserviceService } from '../../servers/regservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(public users:RegserviceService,public router:Router) { }
private files = [];
response:any;
b=true;
selectuser="fgjdfhxjx";
loading=true

  ngOnInit() {
this.users.getusers().subscribe(
      res => {
        this.response=res;
        // console.log(this.response[1]);
        for (let i = 0; i < this.response.length; i++) {
        this.files[i] = {
          username: this.response[i].firstName,
          nic : this.response[i].nic,
          userid: this.response[i]._id,
          isblock:this.response[i].isblock
        };
        
      }
      this.loading=false
      },
      err => { 
        // console.log(err);
        
      });
  }
user(nic,id){
  this.users.setuser(nic,id);
  this.router.navigateByUrl('/admin/upload')
}

block(id){console.log("jfh")
let data={
  id:id
}
  this.users.block(data).subscribe(
    res => {
this.ngOnInit();
    },
    err => { 
      
    });
}
unblock(id){
  let data={
    id:id
  }
    this.users.unblock(data).subscribe(
      res => {
  this.ngOnInit()
      },
      err => { 
        
      });
}

profile(id){console.log(id)
  this.router.navigateByUrl('/user/'+id);
}
}
