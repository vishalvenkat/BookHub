import { Injectable } from "@angular/core";
import { User } from "../Class/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userList: User[] = [];
  name: string;
  constructor() {
    let user = this.createNewUser("admin", "admin", "admin");
    this.userList.push(user);
  }
  private createNewUser = (
    name: string,
    userName: string,
    password: string
  ): User => {
    let user = new User(this.userList.length + 1, name, userName, password);
    return user;
  };

  login = (userName: string, password: string): boolean => {
    let user = this.userList.find(
      (user) => user.userName === userName && user.password === password
    );
    if (user !== undefined) {
      this.name = user.name;
    }
    return user === undefined ? false : true;
  };

  registerNewUser = (
    name: string,
    userName: string,
    password: string
  ): void => {
    let user = this.createNewUser(name, userName, password);
    this.userList.push(user);
  };
}
