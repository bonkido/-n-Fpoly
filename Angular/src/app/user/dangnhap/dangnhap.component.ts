import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import moment  from 'moment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css'
  })
  
export class DangnhapComponent {

    constructor( private auth:AuthService, 
    private router: Router ) { } 

  xulyDN(data:any){
  this.auth.login(data.un, data.pw).toPromise()
    .then(res => {
      console.log(res);
      
      if (typeof res === 'object' && res !== null) {
        if ('idToken' in res && 'expiresIn' in res) {
          const expiresAt = moment().add(res.expiresIn as number,'second');
          localStorage.setItem('id_token', res.idToken as string);
          localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
          this.router.navigateByUrl('/');
        } else {
          console.log('Bạn không có quyền đăng nhập vào web');
          this.router.navigateByUrl('/dangnhap');
        }
      } else {
        console.log('Lỗi: Phản hồi không phải là một đối tượng.');
        this.router.navigateByUrl('/dangnhap');
      }
    })
    .catch(error => {
      console.log('Bạn không có quyền đăng nhập vào website');
      this.router.navigateByUrl('/dangnhap');
    });
}
}
