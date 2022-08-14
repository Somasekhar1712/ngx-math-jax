import { TestBed } from '@angular/core/testing';

import { NgxMathJaxService } from './ngx-math-jax.service';

describe('NgxMathJaxService', () => {
  let service: NgxMathJaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMathJaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
