import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ngx-math-jax",
  templateUrl: "./ngx-math-jax.component.html",
  styleUrls: ["./ngx-math-jax.component.css"],
})
export class NgxMathJaxComponent implements OnInit {
  @Input() mathMl: any;
  @Input() questionNo: any;
  @Input() answerNo: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}
}
