import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MatPageNotFoundComponent } from './mat-page-not-found/mat-page-not-found.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';
import { MatColorPanelComponent } from './mat-color-panel/mat-color-panel.component';

@NgModule({
  declarations: [MatPageNotFoundComponent, MatExpansionPanelComponent, MatColorPanelComponent],
  imports: [RouterModule, CommonModule, MatButtonModule],
  exports: [MatPageNotFoundComponent, MatExpansionPanelComponent, MatColorPanelComponent]
})
export class FxLibNgModule { }
