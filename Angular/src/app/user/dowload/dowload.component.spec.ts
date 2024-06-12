import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadComponent } from './dowload.component';

describe('DowloadComponent', () => {
  let component: DowloadComponent;
  let fixture: ComponentFixture<DowloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DowloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
