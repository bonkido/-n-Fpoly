import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { EditsanphamComponent } from './editsanpham/editsanpham.component';
import { ThemspComponent } from './themsp/themsp.component';
import { DonhangComponent } from './donhang/donhang.component';
import { baoveGuard } from './baove.guard';


const routes: Routes = [
  { 
    path: '',
    component: MainadminComponent,
    children: [
      { path: 'trangchu', component: TrangchuComponent , canActivate: [baoveGuard] },
      { path: 'sanpham', component: SanphamComponent , canActivate: [baoveGuard] } , 
      { path: 'donhang', component: DonhangComponent , canActivate: [baoveGuard] } , 
      { path: 'themsp', component: ThemspComponent , canActivate: [baoveGuard] } , 
      { path: 'editsanpham', component: EditsanphamComponent , canActivate: [baoveGuard] },
      { path: 'editsanpham/:id', component: EditsanphamComponent  , canActivate: [baoveGuard] },
      { path: '', component: TrangchuComponent  , canActivate: [baoveGuard]},
      { path: '**', component: SanphamComponent , canActivate: [baoveGuard]},
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
export class AdminModule { }