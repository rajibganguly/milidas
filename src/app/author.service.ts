import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  books = './../assets/data.books.json';
  constructor() { }

  getPublishedBooks(): any {
    return this.books
  }
}
