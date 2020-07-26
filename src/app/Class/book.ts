import { Comment } from "./comment";

export class Book {
  bookId: number;
  title: string;
  authorId: number;
  description: string;
  story: string;
  comments: Comment[];
  constructor(
    bookId: number,
    title: string,
    authorId: number,
    description: string,
    story: string
  ) {
    this.bookId = bookId;
    this.title = title;
    this.authorId = authorId;
    this.description = description;
    this.story = story;
    this.comments = [];
  }

  addComments = (comment: Comment) => {
    this.comments.push(comment);
  };
}
