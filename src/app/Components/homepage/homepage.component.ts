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
    this.userService.isLoggedIn.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.userId = this.userService.userId;
        this.name = this.userService.name;
        this.initialiseAllBooks();
      }
    });
  }

  ngOnInit(): void {
    this.initialiseSampleBooks();
  }

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
