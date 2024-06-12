import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SanphamComponent } from './user/sanpham/sanpham.component';
import { CartComponent } from './user/cart/cart.component';
import { DangnhapComponent } from './user/dangnhap/dangnhap.component';
import { DangkiComponent } from './user/dangki/dangki.component';
import { ThemspComponent } from './user/themsp/themsp.component';
import { HomeComponent } from './user/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink , SanphamComponent, CartComponent , CommonModule , DangnhapComponent, DangkiComponent , ThemspComponent , HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nguyễn Thiên Phú';
  constructor(private _http: HttpClient) { }

  listLoai:any;
  ngOnInit(): void { 
  let url= `http://localhost:3000/category`;
  this._http.get(url).subscribe( data => {
  this.listLoai = data;
  // console.log("List danh mục (lấy về từ server): ", data); 
  });
  } 
  // giatri : number = 0;
  // nhan_gia_tri (t:number =0 ){
  //   this.giatri = t;
  // }
}
