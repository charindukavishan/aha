import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {
  url = "http://node.exigoms.com/api";
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  storedetails(details) {
    return this.http.post(this.url + '/register', details, this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(this.url + '/authenticate', authCredentials, this.noAuthHeader);
  }
  getUserProfile() {
    return this.http.get(this.url + '/userProfile');
  }
  getUser(id){
    return this.http.get(this.url+'/user/'+id)
  }
  rstpw(email) {
    return this.http.put(this.url + '/rstpw', email);
  }

  newpassword(token) {

    return this.http.get(this.url + '/resetpassword/' + token);

  }

  savepassword(password) {
    return this.http.put(this.url + '/savepassword', password);
  }
  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  setid(id: string) {
    localStorage.setItem('id', id);
  }

  getid() {
    return localStorage.getItem('id');
  }

  deleteid() {
    localStorage.removeItem('id');
  }

  setuser(name: string, id: string) {
    localStorage.setItem('usernic', name);
    localStorage.setItem('userid', id);
  }

  getuser() {
    return localStorage.getItem('usernic');
  }
  getuserid() {
    return localStorage.getItem('userid');
  }
  deleteuser() {
    localStorage.removeItem('usernic');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    this.deleteid();
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  getusers() {
    console.log('getuser')
    return this.http.get(this.url + '/users');
  }
  block(id) {console.log(id)
    return this.http.post(this.url + '/block', id);
  }
  unblock(id) {
    return this.http.post(this.url + '/unblock',id);
  }

  newpost(post) {
    return this.http.post(this.url + '/newPost', post);
  }
  getAllPosts() {
    return this.http.get(this.url + '/getPosts');
  }
  getname(id){
    let data={
      id:id
    }
    return this.http.post(this.url + '/username',data);
  }

}
