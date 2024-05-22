import { Component } from '@angular/core';
import { SanphamComponent } from '../sanpham/sanpham.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SanphamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
