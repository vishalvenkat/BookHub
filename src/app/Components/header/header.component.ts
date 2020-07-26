import { Component, OnInit } from "@angular/core";
import { SidenavService } from "src/app/Service/sidenav.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showSidenav: boolean = false;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.sidenavService.showSideNav.subscribe((showSidenav: boolean) => {
      this.showSidenav = showSidenav;
    });
  }

  toggleSideNav = (): void => {
    this.sidenavService.showSideNav.emit(!this.showSidenav);
  };
}
