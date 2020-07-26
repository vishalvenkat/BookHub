import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
  MatCardModule,
} from "@angular/material";

const angularMaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatSnackBarModule,
  MatCardModule,
];

@NgModule({
  exports: [angularMaterialModules],
  imports: [angularMaterialModules],
})
export class MaterialModule {}
