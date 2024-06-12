import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DulieuService , SanPham } from '../dulieu.service';

@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sanpham.component.html',
  styleUrl: './sanpham.component.css'
})
export class SanphamComponent {
  listProducts: SanPham[] = [];

  constructor(private d: DulieuService, private http: HttpClient) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.d.getSanPhamFood().subscribe(data => {
      this.listProducts = data;
      // console.log("List đồ ăn (lấy về từ server): ", data);
    });
  }
  addToCart(product: SanPham) {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    this.http.get<any[]>('http://localhost:3000/Cart').subscribe(
      (cartItems) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
          // Sản phẩm đã tồn tại, tăng số lượng lên 1
          existingItem.quantity++;
          this.http.put<any>(`http://localhost:3000/Cart/${existingItem.id}`, existingItem).subscribe(
            (response) => {
              alert('Sản phẩm này đã thêm vào giỏ hàng 1 lần nữa ');
            },
            (error) => {
              console.error('Lỗi khi cập nhật số lượng sản phẩm trong giỏ hàng:', error);
            }
          );
        } else {
          // Sản phẩm chưa tồn tại, thêm mới với số lượng là 1
          const productToAdd = { ...product, quantity: 1 };
          this.http.post<any>('http://localhost:3000/Cart', productToAdd).subscribe(
            (response) => {
              alert('Sản phẩm đã thêm vào giỏ hàng');
            },
            (error) => {
              console.error('Lỗi khi lưu sản phẩm vào giỏ hàng:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Lỗi khi lấy thông tin giỏ hàng:', error);
      }
    );
  }
}