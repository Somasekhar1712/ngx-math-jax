import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMathJaxAnsComponent } from './ngx-math-jax-ans.component';

describe('NgxMathJaxAnsComponent', () => {
  let component: NgxMathJaxAnsComponent;
  let fixture: ComponentFixture<NgxMathJaxAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMathJaxAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMathJaxAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
