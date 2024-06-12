import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { DulieuService , SanPham } from '../dulieu.service';
import { CommonModule } from '@angular/common';
import { EditsanphamComponent } from '../editsanpham/editsanpham.component';



@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [CommonModule , EditsanphamComponent],
  templateUrl: './sanpham.component.html',
  styleUrl: '../mainadmin/mainadmin.component.css'
})
export class SanphamComponent {
  listProducts: SanPham[] = [];

  constructor(private d: DulieuService, private http: HttpClient , private router:Router ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.d.getSanPhamFood().subscribe(data => {
      this.listProducts = data;
      // console.log("List đồ ăn (lấy về từ server): ", data);
    });
  }

  removeFromCart(id: number) {
    // Hiển thị hộp thoại xác nhận
    const confirmed = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?');
  
    if (confirmed) {
      // Người dùng đã xác nhận, xóa sản phẩm khỏi giỏ hàng
      this.d.XoaSanPhamFood(id).subscribe(
        () => {
          // Xóa sản phẩm khỏi danh sách sản phẩm trong giỏ hàng
          this.listProducts = this.listProducts.filter(item => item.id !== id);
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

  // sửa sản phẩm
  editingProduct: SanPham | null = null;
  
  startEditProduct(product: SanPham) {
    this.editingProduct = { ...product };
  }
  
  saveEditProduct() {
    if (this.editingProduct) {
      this.d.updateFood(this.editingProduct.id, this.editingProduct).subscribe(() => {
        this.listProducts = this.listProducts.map(item => (item.id === this.editingProduct?.id ? this.editingProduct : item));
        this.editingProduct = null;
      });
    }
  }

  editProduct(product: any) {
    this.router.navigate(['admin/editsanpham/', product.id]);
  }

}
