import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DulieuService, SanPham } from '../dulieu.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editsanpham',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editsanpham.component.html',
  styleUrl: './editsanpham.component.css'
})
export class EditsanphamComponent implements OnInit {
  selectedProduct: SanPham | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: DulieuService,
    private router: Router
  ) {}

  onNameChange(event: Event) {
    const newName = (event.target as HTMLInputElement).value;
    if (this.selectedProduct) {
      this.selectedProduct.name = newName;
    } else {
      console.error('Không thể thay đổi');
    }
  }
  
onPriceChange(event: Event) {
  const newPrice = (event.target as HTMLInputElement).valueAsNumber;
  if (this.selectedProduct) {
    this.selectedProduct.price = newPrice;
  } else {
    console.error('selectedProduct is null or undefined');
  }
}

onQuantityChange(event: Event) {
  const newQuantity = (event.target as HTMLInputElement).valueAsNumber;
  if (this.selectedProduct) {
    this.selectedProduct.quantity = newQuantity;
  } else {
    console.error('selectedProduct is null or undefined');
  }
}
onSloganChange(event: Event) {
  const newSlogan = (event.target as HTMLTextAreaElement).value;
  if (this.selectedProduct) {
    this.selectedProduct.slogan = newSlogan;
  } else {
    console.error('Không thể thay đổi');
  }
}
onCategoryChange(event: Event) {
  const newCategory = (event.target as HTMLSelectElement).value;
  if (this.selectedProduct) {
    this.selectedProduct.category = newCategory;
  } else {
    console.error('Không thể thay đổi');
  }
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.getProductDetails(id);
    });
  }

  
  getProductDetails(id: number) {
    this.productService.getSanPhamFoodId(id).subscribe(product => {
      this.selectedProduct = product;
    });
  }

  saveProduct() {
    if (this.selectedProduct) {
      this.productService.updateFood(this.selectedProduct.id, this.selectedProduct).subscribe(
        (selectedProduct) => {
          this.selectedProduct = selectedProduct;
          alert("Sửa thành công");
          this.router.navigate(['admin/sanpham']);
        },
        (error) => {
          console.error("Lỗi khi cập nhật sản phẩm:", error);
          alert("Đã có lỗi xảy ra khi cập nhật sản phẩm. Vui lòng thử lại sau.");
        }
      );
    }
  }
}