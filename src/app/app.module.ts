import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookServiceService } from './book-service.service';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { TestAddComponent } from './test-add/test-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    TestAddComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'add-book', component: AddBookComponent},
      {path: 'book-list', component: BookListComponent}
    ])
  ],
  providers: [ BookServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
