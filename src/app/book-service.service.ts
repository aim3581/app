import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookServiceService {

  url = 'http://localhost:3000/book';

  constructor(private http: Http) {

  }

  get() {
    return this.http.get(this.url);
  }

  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
//  book_id,subject_name,book_name,author_name,price
  post(book_id: number, subject_name: string, book_name: string, author_name: string, price: number) {
    const body = {
      book_id: book_id,
      subject_name: subject_name,
      book_name: book_name,
      author_name: author_name,
      price: price
    };

    const headers = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({headers: headers});

    return this.http.post(this.url, body, requestOptions);
  }
}



