import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-mat-page-not-found',
  templateUrl: './demo-mat-page-not-found.component.html',
  styleUrls: ['./demo-mat-page-not-found.component.css']
})
export class DemoMatPageNotFoundComponent implements OnInit {
  fallbackRoute = new FormControl('/landing-page');
  fallbackText = new FormControl('Hier gehts zurück.');

  constructor() { }

  ngOnInit() {
  }

}
