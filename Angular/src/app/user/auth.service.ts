import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient,
    @Inject(DOCUMENT)  private document: Document
  ) { }

  login(username:string='', password:string=''){
    const userInfo = { un:username, pw:password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post('http://localhost:5000/login', userInfo, { headers: headers });
  }

 daDangNhap() {
   let localStorage = this.document.defaultView?.localStorage
    if (!localStorage) return false;
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false; //chưa dn    
    const expiresAt = JSON.parse(str);    
    return moment().isBefore(moment(expiresAt));
  } //daDangNhap

  thoat() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("username");
}

}
