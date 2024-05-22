import { Component , Input , Output , EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sanpham',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sanpham.component.html',
  styleUrl: './sanpham.component.css'
})
export class SanphamComponent { 
  
  foodItems: any[] = [
    { name: 'Burger', price: 10, slogan: 'Burger ngon tuyệt vời từ nguyên liệu tươi', img: 'https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Pizza', price: 12, slogan: 'Pizza Ý ngon với nhiều loại topping', img: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Salad', price: 8, slogan: 'Salad tươi mát và bổ dưỡng thơm ngon giòn giọt', img: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Sushi', price: 15, slogan: 'Sushi tươi ngon với nguyên liệu cao cấp' , img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Pasta', price: 10, slogan: 'Mì Ý truyền thống chế biến tinh tế vãi chưởng' , img: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Smoothie', price: 6, slogan: 'Nước ép trái cây tươi ngon, giàu vitamin' , img: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Coffee', price: 4, slogan: 'Cà phê thơm ngon được pha chế tỉ mỉ' , img: 'https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Ice Cream', price: 5, slogan: 'Kem ngon mát với nhiều hương vị đa dạng' , img: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=600' }
  ];
  
  @Output() gui_gia_tri = new EventEmitter();
  so_ngau_nhien(){
    let so = Math.round(Math.random() * 100);
    this.gui_gia_tri.emit(so); // bắn sự kiện ra cha 
  }

}
