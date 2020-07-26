import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "src/app/Service/book.service";
import { UserService } from "src/app/Service/user.service";
import { Comment } from "src/app/Class/comment";
import { Book } from "src/app/Class/book";

@Component({
  selector: "app-view-book",
  templateUrl: "./view-book.component.html",
  styleUrls: ["./view-book.component.css"],
})
export class ViewBookComponent implements OnInit {
  book: Book;
  author: string;
  newComment: string = "";
  viewer: string;
  isCommentAvailable: boolean;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let bookId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.book = this.bookService.getBook(bookId);
    this.author = this.getNameWithId(this.book.authorId);
    this.viewer = this.userService.getNameWithId(this.userService.userId);
    this.initialiseComments();
  }
  initialiseComments = () => {
    let commentLength = this.book.comments.length;
    if (commentLength === 0) this.isCommentAvailable = false;
    else this.isCommentAvailable = true;
  };
  addNewComment = (): void => {
    if (this.newComment.length < 1) return;
    let commenterId = this.userService.userId;
    this.bookService.addCommentsInBook(
      this.newComment,
      commenterId,
      this.book.bookId
    );
    this.newComment = "";
    this.isCommentAvailable = true;
  };
  getNameWithId = (userId: number): string => {
    let author = this.userService.getNameWithId(userId);
    return author;
  };
}
