import { NgModule } from '@angular/core';
import { FxLibNgModule } from 'fx-lib-ng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatToolbarModule, 
  MatSidenavModule, 
  MatButtonModule, 
  MatListModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatCheckboxModule 
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    FxLibNgModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    FxLibNgModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
