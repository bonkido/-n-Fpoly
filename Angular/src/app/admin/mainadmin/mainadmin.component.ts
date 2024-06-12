import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterOutlet } from '@angular/router';
import { TrangchuComponent } from '../trangchu/trangchu.component';
import { SanphamComponent } from '../sanpham/sanpham.component';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainadmin',
  standalone: true,
  imports: [RouterLink , RouterOutlet , CommonModule , TrangchuComponent , SanphamComponent],
  templateUrl: './mainadmin.component.html',
  styleUrl: './mainadmin.component.css'
})
export class MainadminComponent {

}
