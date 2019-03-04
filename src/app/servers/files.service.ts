import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: Http) { }

    downloadPDF(filename, filetype): any {
    return this.http.get('http://node.exigoms.com/api/adminfile/' + filename,
    { responseType: ResponseContentType.Blob });
  }
  downloaduserPDF(filename, filetype): any {
    return this.http.get('http://node.exigoms.com/api/userfile/' + filename,
    { responseType: ResponseContentType.Blob });
  }
  showFileNames(id) {
    return this.http.get('http://node.exigoms.com/api/files/'+id);
  }

  recevefile(id){
    return this.http.get('http://node.exigoms.com/api/rfiles/'+id);
  }
}
