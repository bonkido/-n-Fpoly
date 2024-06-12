// user.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { CartComponent } from './cart/cart.component';
import { DangkiComponent } from './dangki/dangki.component';
import { ThemspComponent } from './themsp/themsp.component';
import { LoiComponent } from './loi/loi.component';
import { UsermainComponent } from './usermain/usermain.component';
import { DoipassComponent } from './doipass/doipass.component';
import { baoveGuard } from './baove.guard';


const routes: Routes = [
  {
    path: '',
    component: UsermainComponent,
    children: [
   { path: 'dangnhap', component: DangnhapComponent, title:'Đăng nhập với Bon Hang' , canActivate:[baoveGuard],  } ,
    { path: 'gioithieu', component: GioithieuComponent },
    { path: 'home', component: HomeComponent,title:'Thế giới ẩm thực ' },
    { path: 'sanpham', component: SanphamComponent },
    { path: 'danhsachsanpham/:id', component: DanhsachsanphamComponent },
    { path: 'giohang', component: CartComponent },
    { path: 'dangki', component: DangkiComponent , title:'Đăng kí với Bon Hang' },
    { path: 'themsp', component:  ThemspComponent},
    {path: 'doipass' , component : DoipassComponent , canActivate:[baoveGuard], },
    { path: '', redirectTo:'home' , pathMatch:'full' },
    // { path: '**', component:  LoiComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule { }