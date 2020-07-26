import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/Class/book";
import { Router } from "@angular/router";
import { BookService } from "src/app/Service/book.service";
import { UserService } from "src/app/Service/user.service";

@Component({
  selector: "app-storycard",
  templateUrl: "./storycard.component.html",
  styleUrls: ["./storycard.component.css"],
})
export class StorycardComponent implements OnInit {
  @Input() book: Book;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {}

  viewStory = () => {
    this.router.navigate(["/ViewBook", this.book.bookId]);
  };
  getAuthor = (authorId: number): string => {
    return this.userService.getNameWithId(authorId);
  };
}
