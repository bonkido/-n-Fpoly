import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from '../cart/cart.component';
import { DangnhapComponent } from '../dangnhap/dangnhap.component';
import { DangkiComponent } from '../dangki/dangki.component';
import { ThemspComponent } from '../themsp/themsp.component';
import { HomeComponent } from '../home/home.component';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-usermain',
  standalone: true,
  imports: [RouterOutlet , RouterLink , SanphamComponent, CartComponent , CommonModule , DangnhapComponent, DangkiComponent , ThemspComponent , HomeComponent ],
  templateUrl: './usermain.component.html',
  styleUrl: './usermain.component.css'
})
export class UsermainComponent {

  constructor(private _http: HttpClient,
              private auth:AuthService
  ) { }

  listLoai:any;
  ngOnInit(): void { 
  let url= `http://localhost:3000/category`;
  this._http.get(url).subscribe( data => {
  this.listLoai = data;
  // console.log("List danh mục (lấy về từ server): ", data); 
  });
  } 
  daDangNhap() { return this.auth.daDangNhap()}

  thoat(){ this.auth.thoat();  }

  
  
}
