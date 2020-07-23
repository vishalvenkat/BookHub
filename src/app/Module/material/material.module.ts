import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";

const angularMaterialModules = [MatToolbarModule];

@NgModule({
  exports: [angularMaterialModules],
  imports: [angularMaterialModules],
})
export class MaterialModule {}
