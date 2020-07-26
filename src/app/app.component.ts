import { Component } from "@angular/core";
import { UserService } from "./Service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "BookHub";
  showSideNav: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    userService.isLoggedIn.emit(false);
  }
  toggleSideNav = () => {
    this.showSideNav = !this.showSideNav;
  };
}
