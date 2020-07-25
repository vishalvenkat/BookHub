import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() showSideNav = new EventEmitter<boolean>();
  constructor() {
    this.showSideNav.emit(false);
  }

  ngOnInit() {}

  toggleSideNav = (): void => {
    this.showSideNav.emit(!this.showSideNav);
  };
}
