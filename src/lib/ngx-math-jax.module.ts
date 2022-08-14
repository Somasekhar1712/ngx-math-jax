import { NgModule } from "@angular/core";
import { NgxMathJaxAnsComponent } from "./ngx-math-jax-ans/ngx-math-jax-ans.component";
import { NgxMathJaxQueComponent } from "./ngx-math-jax-que/ngx-math-jax-que.component";
import { NgxMathJaxComponent } from "./ngx-math-jax.component";
import { MathJaxDirective } from "./ngx-math-jax.directive";
import { NgxMathJaxService } from "./ngx-math-jax.service";

@NgModule({
  declarations: [
    NgxMathJaxQueComponent,
    NgxMathJaxAnsComponent,
    NgxMathJaxComponent,
    MathJaxDirective,
  ],
  imports: [],
  providers: [NgxMathJaxService],
  exports: [
    NgxMathJaxQueComponent,
    NgxMathJaxAnsComponent,
    NgxMathJaxComponent,
    MathJaxDirective,
  ],
})
export class NgxMathJaxModule {}
