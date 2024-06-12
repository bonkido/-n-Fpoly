import { Component } from '@angular/core';
import { DulieuService , SanPham } from '../dulieu.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donhang',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donhang.component.html',
  styleUrl: '../mainadmin/mainadmin.component.css'
})
export class DonhangComponent {
  listProducts: SanPham[] = [];

  constructor(private d: DulieuService, private http: HttpClient) {}

  ngOnInit(): void {
    this.d.Cart().subscribe(data => {
      this.listProducts = data;
      // console.log("List đồ ăn (lấy về từ server): ", data);
    });
  }

}
