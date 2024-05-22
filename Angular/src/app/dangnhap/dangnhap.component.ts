import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dangnhap',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './dangnhap.component.html',
  styleUrl: './dangnhap.component.css'
  })
  
export class DangnhapComponent {
  username:string = 'admin';
  password:string = '123';
  xuly(d:any){
    console.log("Data: ",d);
    console.log("Username=", this.username);
    console.log("Password=", this.password);
        }
    
}
