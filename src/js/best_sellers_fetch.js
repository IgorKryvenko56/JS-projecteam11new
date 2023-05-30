import axios from 'axios';

export class FetchBooks {
  API_URL = 'https://books-backend.p.goit.global/books/';
  constructor() {
    this.bookId = 0;
    this.category = '';
  }

  fetchCategoryList() {
    return axios
      .get(`${this.API_URL}/category-list`)
      .then(response => response)
      .catch(console.error);
  }

  fetchTopBooks() {
    return axios
      .get(`${this.API_URL}/top-books`)
      .then(response => response)
      .catch(console.error);
  }

  fetchBookId() {
    return axios
      .get(`${this.API_URL}${this.bookId}`)
      .then(response => response)
      .catch(console.error);
  }

  fetchCategoryOfBooks() {
    return axios
      .get(`${this.API_URL}category?category=${this.category}`)
      .then(response => response)
      .catch(error => console.error(error));
  }
}

// To use this FetchBooks class, you need to create an 
// instance of it and call the desired methods to fetch
// the book data from the API.For example:

// const fetchBooks = new FetchBooks();

// fetchBooks
//   .fetchCategoryList()
//   .then(response => {
//     // Handle the category list response
//   })
//   .catch(error => {
//     // Handle errors
//   });

// fetchBooks
//   .fetchTopBooks()
//   .then(response => {
//     // Handle the top books response
//   })
//   .catch(error => {
//     // Handle errors
//   });

// // You can set the bookId or category properties before calling the respective fetch methods
// fetchBooks.bookId = 123;
// fetchBooks
//   .fetchBookId()
//   .then(response => {
//     // Handle the book ID response
//   })
//   .catch(error => {
//     // Handle errors
//   });

// fetchBooks.category = 'fiction';
// fetchBooks
//   .fetchCategoryOfBooks()
//   .then(response => {
//     // Handle the category of books response
//   })
//   .catch(error => {
//     // Handle errors
//   });