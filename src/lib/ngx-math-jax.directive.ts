import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NgxMathJaxService } from './ngx-math-jax.service';

@Directive({
  selector: '[NgxMathJax]',
})
export class MathJaxDirective implements OnInit, OnChanges, OnDestroy {
  @Input() NgxMathJax: any;
  private alive$ = new Subject<boolean>();
  private readonly el: HTMLElement;

  constructor(
    private mathService: NgxMathJaxService,
    private elementRef: ElementRef
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit() {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes &&
      changes['NgxMathJax'] &&
      changes['NgxMathJax'].currentValue
    ) {
      this.render();
    }
  }

  private render() {
    this.mathService
      .ready()
      .pipe(take(1), takeUntil(this.alive$))
      .subscribe(() => this.mathService.render(this.el, this.NgxMathJax));
  }

  ngOnDestroy() {
    this.alive$.next(false);
  }
}
