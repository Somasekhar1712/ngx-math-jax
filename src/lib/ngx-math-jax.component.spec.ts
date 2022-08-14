import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMathJaxComponent } from './ngx-math-jax.component';

describe('NgxMathJaxComponent', () => {
  let component: NgxMathJaxComponent;
  let fixture: ComponentFixture<NgxMathJaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMathJaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMathJaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
