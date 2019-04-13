import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fx-mat-page-not-found',
  templateUrl: './mat-page-not-found.component.html',
  styleUrls: ['./mat-page-not-found.component.css']
})
export class MatPageNotFoundComponent implements OnInit {
  @Input() fallbackRoute = "";
  @Input() fallbackText = "Home";

  constructor() { }

  ngOnInit() {
  }

}
