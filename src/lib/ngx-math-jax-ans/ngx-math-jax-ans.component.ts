import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ngx-math-jax-ans",
  templateUrl: "./ngx-math-jax-ans.component.html",
  styleUrls: ["./ngx-math-jax-ans.component.css"],
})
export class NgxMathJaxAnsComponent implements OnInit {
  @Input() mathMl: any;

  constructor() {}

  ngOnInit(): void {}
}
