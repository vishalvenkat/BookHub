import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { GetStartedComponent } from "../get-started/get-started.component";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  getStarted = () => {
    let ref = this.dialog.open(GetStartedComponent);
    ref.componentInstance.isLoggedIn.subscribe((data: any) => {
      if (data === true) {
        this.userService.isLoggedIn.emit(true);
        ref.close();
        this.navigateToHomePage();
      }
    });
  };
  navigateToHomePage = () => {
    this.router.navigate(["Homepage"]);
  };
}
