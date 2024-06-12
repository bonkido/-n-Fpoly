import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import moment from 'moment';


export const baoveGuard: CanActivateFn = (route, state) => {
  // const str = localStorage.getItem("expires_at") || ""; 
  // if (str=="") return false; //chưa dn 
  // const expiresAt = JSON.parse(str); 
  // const daDangNhap = moment().isBefore(moment(expiresAt)); 
  // return daDangNhap;
  return true;
};
