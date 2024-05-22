import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-danhsachsanpham',
  standalone: true,
  imports: [],
  templateUrl: './danhsachsanpham.component.html',
  styleUrl: './danhsachsanpham.component.css'
})

export class DanhsachsanphamComponent {
  id:number= 0; 			//id loại sản phẩm
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  }
  
