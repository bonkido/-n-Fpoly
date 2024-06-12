import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
selector: 'app-themsp',
standalone: true,
imports: [ReactiveFormsModule, CommonModule, FormsModule],
templateUrl: './themsp.component.html',
styleUrl: './themsp.component.css'
})
export class ThemspComponent implements OnInit{
constructor(private fbuilder:FormBuilder, private http: HttpClient) { }
	frm1!:FormGroup;
	ngOnInit(): void {
	this.frm1 = this.fbuilder.group({
	name:['', Validators.required],
	price: ['', [Validators.min(0), Validators.max(1000000000)]],
	quantity:['', Validators.min(1)],
	category:['', Validators.required],
	slogan:[''],
	image:[''],
	})
	}
	// ngDoCheck(){ console.log(this.frm1);}

	submit() {
		if (this.frm1.valid) {
		  this.http.post('http://localhost:3000/Products', this.frm1.value)
			.subscribe(
			  (response) => {
				  alert('Sản phẩm đã được thêm thành công!');
				  this.frm1.reset();
			  },
			  (error) => {
				console.error('Lỗi khi thêm sản phẩm:', error);
			  }
			);
		}
	  }

}
