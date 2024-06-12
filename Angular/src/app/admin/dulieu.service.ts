import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

export interface SanPham {
  id: number;
  name: string;
  price:number;
  slogan:string;
  quantity:number;
  image:string;
  thanhTien:number;
  category:string;
}

@Injectable({
  providedIn: 'root'
})
export class DulieuService {

  constructor( private h:HttpClient) { } 

  // sản phẩm
  getSanPhamFood(){
    return this.h.get<SanPham[]>('http://localhost:3000/Products');
  }
  getSanPhamFoodId(id:number){
    return this.h.get<SanPham>(`http://localhost:3000/Products/${id}`);
  }
  ThemSanPhamFood(){
    return this.h.post<SanPham[]>('http://localhost:3000/Products', {});
  }
  XoaSanPhamFood(id: number) {
    return this.h.delete<SanPham>(`http://localhost:3000/Products/${id}`);
  }
  updateFood(id: number, product: SanPham) {
    return this.h.put<SanPham>(`http://localhost:3000/Products/${id}`, product);
  }
  // giỏ hàng
  Cart(){
    return this.h.get<SanPham[]>('http://localhost:3000/Cart', {});
  }
  removeFromCart(id: number) {
    return this.h.delete<SanPham>(`http://localhost:3000/Cart/${id}`);
  }
  updateCart(id: number, product: SanPham) {
    return this.h.put<SanPham>(`http://localhost:3000/Cart/${id}`, product);
  }

}
