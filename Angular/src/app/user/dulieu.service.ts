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

  getSanPhamFood(){
    return this.h.get<SanPham[]>('http://localhost:3000/Products');
  }
  ThemSanPhamFood(){
    return this.h.post<SanPham[]>('http://localhost:3000/Products', {});
  }
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
