import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/Service/user.service";
import { BookService } from "src/app/Service/book.service";
import { Book } from "src/app/Class/book";
import { Router } from "@angular/router";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  userId: number;
  bookList: Book[] = [];
  name: string;
  constructor(
    private userService: UserService,
    private bookService: BookService,
    private router: Router
  ) {
    userService.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.setRequiredParameters();
      }
    });
  }
  ngOnInit(): void {
    if (this.userService.userId !== undefined) {
      this.setRequiredParameters();
    } else {
      this.initialiseSampleBooks();
    }
  }
  setRequiredParameters = (): void => {
    this.userId = this.userService.userId;
    this.name = this.userService.name;
    this.initialiseAllBooks();
  };
  getAuthorName = (authorId: number): string => {
    let name = this.userService.getNameWithId(authorId);
    return name;
  };

  initialiseAllBooks = (): void => {
    console.log(`${this.userId}`);
    this.bookList = this.bookService.getPublicBooks(this.userId);
  };
  initialiseSampleBooks = (): void => {
    console.log("loaded sample books");
    this.bookList = this.bookService.getSampleBooks();
  };
}
