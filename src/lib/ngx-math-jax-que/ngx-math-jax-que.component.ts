import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ngx-math-jax-que",
  templateUrl: "./ngx-math-jax-que.component.html",
  styleUrls: ["./ngx-math-jax-que.component.css"],
})
export class NgxMathJaxQueComponent implements OnInit {
  @Input() mathMl: any;
  @Input() questionNo: any;

  constructor() {}

  ngOnInit(): void {}
}
