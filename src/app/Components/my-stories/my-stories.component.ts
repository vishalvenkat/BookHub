import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/Service/book.service";
import { Book } from "src/app/Class/book";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: "app-my-stories",
  templateUrl: "./my-stories.component.html",
  styleUrls: ["./my-stories.component.css"],
})
export class MyStoriesComponent implements OnInit {
  myBookList: Book[] = [];
  name: string;
  constructor(
    private bookService: BookService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.myBookList = this.bookService.getMyBookList(this.userService.userId);
    this.name = this.userService.getNameWithId(this.userService.userId);
  }
}
