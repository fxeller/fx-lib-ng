import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-mat-color-panel',
  templateUrl: './demo-mat-color-panel.component.html',
  styleUrls: ['./demo-mat-color-panel.component.css']
})
export class DemoMatColorPanelComponent implements OnInit {
  color = new FormControl('primary')

  constructor() { }

  ngOnInit() {
  }

}
