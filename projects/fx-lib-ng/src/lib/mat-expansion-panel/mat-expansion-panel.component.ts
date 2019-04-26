import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatExpansionPanelAnimations } from './mat-expansion-panel.animations';

@Component({
  selector: 'fx-mat-expansion-panel',
  templateUrl: './mat-expansion-panel.component.html',
  styleUrls: ['./mat-expansion-panel.component.css'],
  animations: [
    MatExpansionPanelAnimations.indicatorRotate,
    MatExpansionPanelAnimations.bodyExpansion
  ],
  host: {
    'class': 'fx-mat-expansion-panel mat-elevation-z2'
  }
})
export class MatExpansionPanelComponent implements OnInit, OnChanges {
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

  @Input() color: string;

  @ViewChild('headerContainer') headerContainer: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color && this.headerContainer) {
      if (changes.color.previousValue) {
        this.headerContainer.nativeElement.classList.remove(`mat-${changes.color.previousValue}`);
      }
      if (changes.color.currentValue) {
        this.headerContainer.nativeElement.classList.add(`mat-${changes.color.currentValue}`);
      }
    }
  }
}
