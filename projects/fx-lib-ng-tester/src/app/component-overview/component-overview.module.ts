import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ComponentOverviewRoutingModule } from './component-overview-routing.module';
import { ComponentOverviewComponent } from './component-overview.component';
import { DemoMatPageNotFoundComponent } from './demo-mat-page-not-found/demo-mat-page-not-found.component';
import { DemoMatExpansionPanelComponent } from './demo-mat-expansion-panel/demo-mat-expansion-panel.component';
import { DemoMatColorPanelComponent } from './demo-mat-color-panel/demo-mat-color-panel.component';

@NgModule({
  declarations: [ComponentOverviewComponent, DemoMatPageNotFoundComponent, DemoMatExpansionPanelComponent, DemoMatColorPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentOverviewRoutingModule
  ]
})
export class ComponentOverviewModule { }
