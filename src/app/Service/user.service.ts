import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../Class/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userList: User[] = [];
  name: string;
  userId: number;
  isLoggedIn = new EventEmitter<boolean>();
  constructor() {
    this.userList.push(this.createNewUser("admin", "admin", "admin"));
    this.userList.push(this.createNewUser("vishal", "vishal", "vishal"));
    this.userList.push(this.createNewUser("venkat", "venkat", "venkat"));
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
      this.userId = user.userId;
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

  getNameWithId = (id: number): string => {
    let user = this.userList.find((user) => user.userId === id);
    return user.name;
  };
}
