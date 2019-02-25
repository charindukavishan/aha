import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: Http) { }

    downloadPDF(filename, filetype): any {
    return this.http.get('http://node.exigoms.com/api/file/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  admindownloadPDF(filename, filetype): any {
    return this.http.get('http://node.exigoms.com/api/adminfile/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames() {
    return this.http.get('http://node.exigoms.com/api/userfiles');
  }

  adminsent(){
    return this.http.get('http://node.exigoms.com/api/admindoc');
  }

  recevefile(id){
    return this.http.get('http://node.exigoms.com/api/rfiles/'+id);
  }

  readmsg(file){
    return this.http.get('http://node.exigoms.com/api/readmsg/'+file);
  }

  message(){
    return this.http.get('http://node.exigoms.com/api/messages');

    // 'http://node.exigoms.com/api/messages
  }
}
