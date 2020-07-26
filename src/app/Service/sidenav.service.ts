import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidenavService {
  showSideNav = new EventEmitter<boolean>();
  constructor() {}
}
