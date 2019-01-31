import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: Http) { }

    downloadPDF(filename, filetype): any {
    return this.http.get('http://localhost:3001/api/file/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  admindownloadPDF(filename, filetype): any {
    return this.http.get('http://localhost:3001/api/adminfile/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames() {
    return this.http.get('http://localhost:3001/api/userfiles');
  }

  adminsent(){
    return this.http.get('http://localhost:3001/api/admindoc');
  }

  recevefile(id){
    return this.http.get('http://localhost:3001/api/rfiles/'+id);
  }

  readmsg(file){console.log(file)
    return this.http.get('http://localhost:3001/api/readmsg/'+file);
  }

  message(){
    return this.http.get('http://localhost:3001/api/messages');

    // 'http://localhost:3001/api/messages
  }
}
