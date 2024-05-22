import { Routes } from '@angular/router';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { HomeComponent } from './home/home.component'
import { SanphamComponent } from './sanpham/sanpham.component'
import { CartComponent } from './cart/cart.component'
import { LoiComponent } from './loi/loi.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';


export const routes: Routes = [
    { path: 'dangnhap', component: DangnhapComponent, title:'Đăng nhập với Bon Hang' } ,
    { path: 'gioithieu', component: GioithieuComponent },
    { path: 'home', component: HomeComponent,title:'Thế giới ẩm thực ' },
    { path: 'sanpham', component: SanphamComponent },
    { path: 'danhsachsanpham/:id', component: DanhsachsanphamComponent },
    { path: 'giohang', component: CartComponent },
    { path: 'dangki', component: DangkiComponent , title:'Đăng kí với Bon Hang' },
    { path: '', redirectTo:'/home' , pathMatch:'full' },
    { path: '**', component:  LoiComponent},
];
