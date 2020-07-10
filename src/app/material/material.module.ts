import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatDividerModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule { }
