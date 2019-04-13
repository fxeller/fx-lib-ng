import { Component, OnInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatExpansionPanelAnimations } from './mat-expansion-panel.animations';

@Component({
  selector: 'fx-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrls: ['./mat-expansion-panel.component.css'],
  animations: [
    MatExpansionPanelAnimations.indicatorRotate,
    MatExpansionPanelAnimations.bodyExpansion
  ]
})
export class MatExpansionPanelComponent implements OnInit {
  @Input() caption: string;

  private _expanded = true;

  @Input()
  set expanded(value: boolean) {
    this._expanded = coerceBooleanProperty(value);
  }
  get expanded(): boolean {
    return this._expanded;
  }
  
  private _canCollapse = true;

  @Input()
  set canCollapse(value: boolean) {
    this._canCollapse = coerceBooleanProperty(value);
  }
  get canCollapse(): boolean {
    return this._canCollapse;
  }

  constructor() {}

  ngOnInit() {}
}
