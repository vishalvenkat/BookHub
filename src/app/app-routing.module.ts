import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddNewBookComponent } from "./Components/add-new-book/add-new-book.component";
import { ViewBookComponent } from "./Components/view-book/view-book.component";
import { IndexComponent } from "./Components/index/index.component";
import { HomepageComponent } from "./Components/homepage/homepage.component";

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "AddNewBook", component: AddNewBookComponent },
  { path: "ViewBook", component: ViewBookComponent },
  { path: "Homepage", component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
