import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMathJaxQueComponent } from './ngx-math-jax-que.component';

describe('NgxMathJaxQueComponent', () => {
  let component: NgxMathJaxQueComponent;
  let fixture: ComponentFixture<NgxMathJaxQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMathJaxQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMathJaxQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
