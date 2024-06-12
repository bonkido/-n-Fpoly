import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DulieuService , SanPham } from '../dulieu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule , FormsModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {
  listProducts: SanPham[] = [];
  tongThanhTien: number = 0;

  constructor(private d: DulieuService) { }

  ngOnInit(): void { 
    this.fetchCartData();
  }

  // sửa sản phẩm
  editingProduct: SanPham | null = null;

  startEditProduct(product: SanPham) {
    this.editingProduct = { ...product };
  }
  
  saveEditProduct() {
    if (this.editingProduct) {
      this.d.updateCart(this.editingProduct.id, this.editingProduct).subscribe(() => {
        this.listProducts = this.listProducts.map(item => (item.id === this.editingProduct?.id ? this.editingProduct : item));
        this.editingProduct = null;
        this.calculateTongThanhTien();
      });
    }
  }

  // xóa sản phẩm khỏi giỏ hàng
  removeFromCart(id: number) {
    // Hiển thị hộp thoại xác nhận
    const confirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?');
  
    if (confirmed) {
      // Người dùng đã xác nhận, xóa sản phẩm khỏi giỏ hàng
      this.d.removeFromCart(id).subscribe(
        () => {
          // Xóa sản phẩm khỏi danh sách sản phẩm trong giỏ hàng
          this.listProducts = this.listProducts.filter(item => item.id !== id);
          this.calculateTongThanhTien();
        },
        (error) => {
          console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng:', error);
        }
      );
    } else {
      // Người dùng đã hủy, không xóa sản phẩm
      console.log('Đã hủy xóa sản phẩm khỏi giỏ hàng.');
    }
  }


  fetchCartData() {
    this.d.Cart().subscribe(data => {
      this.listProducts = data.map(item => ({
        ...item,
        thanhTien: this.calculateThanhTien(item)
      }));
      this.calculateTongThanhTien();
    });
    
  }

  calculateThanhTien(sanPham: SanPham): number {
    return sanPham.price * sanPham.quantity;
  }

  calculateTongThanhTien() {
    this.tongThanhTien = this.listProducts.reduce((total, item) => total + item.thanhTien, 0);
  }

  onQuantityChange(sanPham: SanPham) {
    sanPham.thanhTien = this.calculateThanhTien(sanPham);
    this.calculateTongThanhTien();
  }
}