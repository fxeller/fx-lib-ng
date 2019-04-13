import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { MatPageNotFoundComponent } from './mat-page-not-found/mat-page-not-found.component';
import { MatExpansionPanelComponent } from './mat-expansion-panel/mat-expansion-panel.component';

@NgModule({
  declarations: [MatPageNotFoundComponent, MatExpansionPanelComponent],
  imports: [RouterModule, CommonModule, MatButtonModule],
  exports: [MatPageNotFoundComponent, MatExpansionPanelComponent]
})
export class FxLibNgModule { }
