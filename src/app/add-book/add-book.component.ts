import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book_id = 0;
  subject_name = '';
  book_name = '';
  author = '';
  price = 0;

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit() {
  }

  addProduct() {
    // console.log(`title: ${this.title}`);
    this.bookService
      // tslint:disable-next-line:whitespace
      .post(this.book_id, this.subject_name, this.book_name, this.author,this.price)
      .subscribe(response => {
        const body = response.json();
        console.log(body);
        // tslint:disable-next-line:triple-equals
        if (body['status'] == 'success') {
          alert('successfully added product');
        } else {
          alert('error while adding product');
        }
      });
  }

}
