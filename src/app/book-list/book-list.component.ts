import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books = [];

  constructor(private bookService: BookServiceService ) {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService
      .get()
      .subscribe(response => {
        const body = response.json();
        console.log(body);
        this.books = body.data;
      });
  }

  ngOnInit() {
  }

  deleteProduct(book) {

    this.bookService
      .delete(book.id)
      .subscribe(response => {
        const body = response.json();
        console.log(body);


        this.loadBooks();
      });
  }

}

