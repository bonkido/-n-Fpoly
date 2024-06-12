import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsanphamComponent } from './editsanpham.component';

describe('EditsanphamComponent', () => {
  let component: EditsanphamComponent;
  let fixture: ComponentFixture<EditsanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditsanphamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditsanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
