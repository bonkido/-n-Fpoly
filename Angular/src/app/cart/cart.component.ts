import { Component , Input , Output , EventEmitter , SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() food:any[] = [];
  price:number = 2000;
  thanhtien:number = 2000;

  xuly(ev:any){
    var t :HTMLInputElement = ev.target;
    var sl = Number(t.value);
    this.thanhtien = this.price*sl;
  }

  @Output() gui_gia_tri = new EventEmitter();
  so_ngau_nhien(){
    let so = Math.round(Math.random() * 100);
    this.gui_gia_tri.emit(so); // bắn sự kiện ra cha 
  }

  @Input() so_san_pham:number = 0;
  ngOnChanges(changes: SimpleChanges) {    
  if (changes['so_san_pham'].currentValue>20) {
        changes['so_san_pham'].currentValue = 20; 
        this.so_san_pham= 20;}    
      console.log("changes=", changes);    }
}
