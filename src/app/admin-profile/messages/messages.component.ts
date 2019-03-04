import { Component, OnInit } from '@angular/core';
import { FilesService } from '../servers/files.service';
import { RegserviceService } from '../../servers/regservice.service';
import { Route, Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(private FileService: FilesService, private service: RegserviceService, public router: Router) { }
  private files = [];
  filename = '';
  response: any;
  public name: any;
  loading=true

  ngOnInit() {
    this.FileService.message().subscribe(res => {
      this.response = res;
      let a: any
      for (let i = 0; i < this.response.json().length; i++) {

        this.service.getname(this.response.json()[i].userId).subscribe(res => {
          this.name = res['user']
          this.files[i] = {
            filename: this.response.json()[i].filename,
            originalname: this.response.json()[i].originalname,
            contentType: this.response.json()[i].mimetype,
            time: this.response.json()[i].time,
            username: this.name
          };
        })
      }
      this.loading=false
    });

  }
  read(name) {
    // console.log(name)
    this.FileService.readmsg(name).subscribe(res => {

    });
  }

  downloadPdf(filename, contentType,originalname) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        // console.log(res)
        const file = new Blob([res.blob()], { type: contentType });
        // console.log(file)
        const fileURL = URL.createObjectURL(file);
        // console.log(fileURL)
        // window.open(fileURL);
        saveAs(file, originalname);

        // window.open('/download');
      }
    );
  }




}
