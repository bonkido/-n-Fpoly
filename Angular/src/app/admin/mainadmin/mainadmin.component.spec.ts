import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainadminComponent } from './mainadmin.component';

describe('MainadminComponent', () => {
  let component: MainadminComponent;
  let fixture: ComponentFixture<MainadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
