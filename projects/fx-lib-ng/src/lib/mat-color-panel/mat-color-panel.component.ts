import { Component, OnInit, ElementRef } from '@angular/core';
import { CanColorCtor, mixinColor, CanColor } from '@angular/material';

export class MatColorPanelComponentBase {
  constructor(public _elementRef: ElementRef) {}
}

export const _MatColorPanelComponentMixinBase: CanColorCtor = mixinColor(MatColorPanelComponentBase);

@Component({
  selector: 'fx-mat-color-panel',
  templateUrl: './mat-color-panel.component.html',
  styleUrls: ['./mat-color-panel.component.css'],
  inputs: ['color'],
  host: {
    'class': 'fx-mat-color-panel'
  }
})
export class MatColorPanelComponent extends _MatColorPanelComponentMixinBase implements OnInit, CanColor {

  constructor(elementRef: ElementRef) {
    super(elementRef);
   }

  ngOnInit() {
  }

}
