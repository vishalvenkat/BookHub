import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Service/user.service";
import { GetStartedComponent } from "../get-started/get-started.component";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { SidenavService } from "src/app/Service/sidenav.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private router: Router,
    private sidenavService: SidenavService
  ) {
    userService.isLoggedIn.subscribe(
      (isLoggedIn: boolean) => (this.isLoggedIn = isLoggedIn)
    );
  }

  ngOnInit(): void {}
  login = () => {
    let ref = this.dialog.open(GetStartedComponent);
    ref.componentInstance.isLoggedIn.subscribe((data: any) => {
      if (data === true) {
        ref.close();
        this.navigateToHomePage();
      }
    });
  };
  navigateToHomePage = () => {
    this.userService.isLoggedIn.emit(true);
    this.closeSidenav();
    this.router.navigate(["Homepage"]);
  };
  closeSidenav = () => {
    this.sidenavService.showSideNav.emit(false);
  };
}
