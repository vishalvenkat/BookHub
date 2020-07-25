import { Component, OnInit, EventEmitter } from "@angular/core";
import { UserService } from "../../Service/user.service";

@Component({
  selector: "app-get-started",
  templateUrl: "./get-started.component.html",
  styleUrls: ["./get-started.component.css"],
})
export class GetStartedComponent implements OnInit {
  isLoggedIn = new EventEmitter<boolean>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  login = (credentials: { userName: string; password: string }) => {
    console.log("verifing the user");
    let isLoggedIn = this.userService.login(
      credentials.userName,
      credentials.password
    );
    this.isLoggedIn.emit(isLoggedIn);
  };
  registerNewUser = (credentials: {
    name: string;
    userName: string;
    password: string;
  }) => {
    this.userService.registerNewUser(
      credentials.name,
      credentials.userName,
      credentials.password
    );
    this.login(credentials);
  };
}
