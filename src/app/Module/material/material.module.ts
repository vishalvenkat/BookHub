import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
} from "@angular/material";

const angularMaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
];

@NgModule({
  exports: [angularMaterialModules],
  imports: [angularMaterialModules],
})
export class MaterialModule {}
