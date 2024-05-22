import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dangki',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './dangki.component.html',
  styleUrl: './dangki.component.css'
})
export class DangkiComponent {
  username:string = '';
  gmail:string = '';
  pass:string = '';
  xuly(d:any){
    console.log("Data: ",d);
    console.log("Username=", this.username);
    console.log("Password=", this.pass);
        }
    
}
