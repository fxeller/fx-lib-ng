import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-mat-expansion-panel',
  templateUrl: './demo-mat-expansion-panel.component.html',
  styleUrls: ['./demo-mat-expansion-panel.component.css']
})
export class DemoMatExpansionPanelComponent implements OnInit {
  caption = new FormControl('This is the caption.')
  expanded = new FormControl('true');
  canCollapse = new FormControl('true');

  constructor() { }

  ngOnInit() {
  }

}
