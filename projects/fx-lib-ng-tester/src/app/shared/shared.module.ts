import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class SharedModule { }
