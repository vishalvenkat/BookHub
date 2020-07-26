import { Injectable } from "@angular/core";
import { Book } from "../Class/book";
import { Comment } from "../Class/comment";

@Injectable({
  providedIn: "root",
})
export class BookService {
  bookList: Book[] = [];
  constructor() {
    this.bookList.push(
      this.createNewBook("Book1", 1, "description1", "story1")
    );
    this.bookList.push(
      this.createNewBook("Book2", 1, "description2", "story2")
    );
    this.bookList.push(
      this.createNewBook("Book3", 2, "description3", "story3")
    );
    this.bookList.push(
      this.createNewBook("Book4", 2, "description4", "story4")
    );
    this.bookList.push(
      this.createNewBook("Book5", 3, "description5", "story5")
    );
    this.bookList.push(
      this.createNewBook("Book6", 3, "description6", "story6")
    );
  }

  createNewBook = (
    title: string,
    authorId: number,
    description: string,
    story: string
  ): Book => {
    let book = new Book(
      this.bookList.length + 1,
      title,
      authorId,
      description,
      story
    );
    return book;
  };
  addMyBook = (
    title: string,
    authorId: number,
    description: string,
    story: string
  ): void => {
    let book = this.createNewBook(title, authorId, description, story);
    this.bookList.push(book);
  };
  getMyBookList = (userId: number): Book[] => {
    let books = this.bookList.filter((book) => book.authorId === userId);
    return books === undefined ? [] : books;
  };

  removeMyBook = (bookId: number): void => {
    this.bookList = this.bookList.filter((books) => books.bookId !== bookId);
  };

  createComments = (
    commentId: number,
    comment: string,
    commenterId: number,
    bookId: number
  ): Comment => {
    let newComment = new Comment(commentId, bookId, comment, commenterId);
    return newComment;
  };

  addCommentsInBook = (
    comment: string,
    commenterId: number,
    bookId: number
  ): void => {
    let book = this.bookList.find((book) => book.bookId === bookId);
    let nextCommentId = book.comments.length + 1;
    let newComment = this.createComments(
      nextCommentId,
      comment,
      commenterId,
      bookId
    );
    book.comments.push(newComment);
    let bookIndex = this.bookList.findIndex((book) => book.bookId === bookId);
    this.bookList[bookIndex] = book;
  };

  getPublicBooks = (authorId: number): Book[] => {
    let publicBooks = this.bookList.filter(
      (book) => book.authorId !== authorId
    );
    return publicBooks === undefined ? [] : publicBooks;
  };

  getBook = (bookId: number): Book => {
    let book = this.bookList.find((book) => book.bookId === bookId);
    return book;
  };
  getSampleBooks = (): Book[] => {
    let numberOfBooks = this.bookList.length;
    let sampleBookList: Book[] = [];
    if (numberOfBooks > 4)
      for (let i = 0; i < 4; i++) sampleBookList.push(this.bookList[i]);
    else
      for (let i = 0; i < numberOfBooks; i++)
        sampleBookList.push(this.bookList[i]);
    return sampleBookList;
  };
}
