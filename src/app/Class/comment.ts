export class Comment {
  commentId: number;
  comment: string;
  commenterId: number;
  bookId: number;
  constructor(
    commentId: number,
    bookId: number,
    comment: string,
    commenterId: number
  ) {
    this.commentId = commentId;
    this.comment = comment;
    this.commenterId = commenterId;
    this.bookId = bookId;
  }
}
