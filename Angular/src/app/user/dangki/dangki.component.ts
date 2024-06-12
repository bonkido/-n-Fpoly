import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dangki',
  standalone: true,
  imports: [FormsModule , CommonModule , ReactiveFormsModule],
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
    
        frm1!: FormGroup;
ngOnInit(): void {
this.frm1 = new FormGroup({
username: new FormControl('bonkido', [Validators.minLength(6)]),
password: new FormControl('hihi1', [Validators.minLength(8)]),
email: new FormControl('hihi@gmail.com'),
});
}


}
