import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentOverviewComponent } from './component-overview.component';
import { DemoMatPageNotFoundComponent } from './demo-mat-page-not-found/demo-mat-page-not-found.component';
import { DemoMatExpansionPanelComponent } from './demo-mat-expansion-panel/demo-mat-expansion-panel.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentOverviewComponent,
    children: [
      {
        path: 'demo-mat-expansion-panel',
        component: DemoMatExpansionPanelComponent
      },
      {
        path: 'demo-mat-page-not-found',
        component: DemoMatPageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentOverviewRoutingModule { }
