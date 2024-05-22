import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';
import { SanphamComponent } from './sanpham/sanpham.component';
import { CartComponent } from './cart/cart.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , RouterLink , SanphamComponent, CartComponent , CommonModule , DangnhapComponent, DangkiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Nguyễn Thiên Phú';

  // giatri : number = 0;
  // nhan_gia_tri (t:number =0 ){
  //   this.giatri = t;
  // }
}
