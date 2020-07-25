import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./Components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./Module/material/material.module";
import { FooterComponent } from "./Components/footer/footer.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavComponent } from "./Components/sidenav/sidenav.component";
import { AddNewBookComponent } from "./Components/add-new-book/add-new-book.component";
import { ViewBookComponent } from "./Components/view-book/view-book.component";
import { IndexComponent } from "./Components/index/index.component";
import { GetStartedComponent } from "./Components/get-started/get-started.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegistrationComponent } from "./Components/register/register.component";
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AddNewBookComponent,
    ViewBookComponent,
    IndexComponent,
    GetStartedComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents: [GetStartedComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
