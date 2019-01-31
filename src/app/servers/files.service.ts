import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: Http) { }

    downloadPDF(filename, filetype): any {
    return this.http.get('http://localhost:3001/api/adminfile/' + filename,
    { responseType: ResponseContentType.Blob });
  }

  showFileNames(id) {
    return this.http.get('http://localhost:3001/api/files/'+id);
  }

  recevefile(id){
    return this.http.get('http://localhost:3001/api/rfiles/'+id);
  }
}
