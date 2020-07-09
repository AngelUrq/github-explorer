import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

const MATERIAL_COMPONENTS = [
  MatCardModule
];

@NgModule({
  imports: [MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS]
})
export class MaterialModule { }
