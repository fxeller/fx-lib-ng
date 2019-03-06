import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ComponentOverviewRoutingModule } from './component-overview-routing.module';
import { ComponentOverviewComponent } from './component-overview.component';

@NgModule({
  declarations: [ComponentOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentOverviewRoutingModule
  ]
})
export class ComponentOverviewModule { }
