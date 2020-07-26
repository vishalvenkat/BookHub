import { Component } from "@angular/core";
import { UserService } from "./Service/user.service";
import { SidenavService } from "./Service/sidenav.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  showSideNav: boolean = false;
  constructor(
    private userService: UserService,
    private sidenavService: SidenavService,
    private router: Router
  ) {
    this.router.navigate([""]);
    sidenavService.showSideNav.emit(false);
    userService.isLoggedIn.emit(false);
    sidenavService.showSideNav.subscribe(
      (sidenav: boolean) => (this.showSideNav = sidenav)
    );
  }
  closeSideNav = () => {
    this.sidenavService.showSideNav.emit(false);
  };
}
