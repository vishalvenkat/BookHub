import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { BookService } from "src/app/Service/book.service";
import { UserService } from "src/app/Service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-new-book",
  templateUrl: "./add-new-book.component.html",
  styleUrls: ["./add-new-book.component.css"],
})
export class AddNewBookComponent implements OnInit {
  form: FormGroup;
  constructor(
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm = (): void => {
    this.form = new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.maxLength(25),
      ]),
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(250),
      ]),
      story: new FormControl("", Validators.required),
    });
  };

  addNewStory = (): void => {
    this.bookService.addMyBook(
      this.form.get("title").value,
      this.userService.userId,
      this.form.get("description").value,
      this.form.get("story").value
    );
    this.router.navigate(["MyBooks"]);
  };
  clearForm = (): void => {
    this.form.reset();
  };
}
