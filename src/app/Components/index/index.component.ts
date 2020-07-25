import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { GetStartedComponent } from "../get-started/get-started.component";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}
  getStarted = () => {
    let ref = this.dialog.open(GetStartedComponent);
    ref.componentInstance.isLoggedIn.subscribe((data: any) => {
      if (data === true) {
        ref.close();
        this.navigateToHomePage();
      }
    });
  };
  navigateToHomePage = () => {
    this.router.navigate(["Homepage"]);
  };
}
