import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks';
import Bookshelves from './Bookshelves';

class BooksApp extends Component {
  
  state = {
    books: [],
    search: '',
    results: []
  }
  

  // conect API to update books
  changeShelf = (book, shelf) => {
    /*BooksAPI.update(book, shelf).then(() => {
      // update shelf with new books
      BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books });
      })
    }).catch(error => console.log('No se ha podido conectar a la API y update a book'));*/
    BooksAPI.update(book, shelf);

    book.shelf = shelf;    

    this.setState(state => ({
    books: state.books.filter(b => b.id !== book.id).concat(book),
    }));
  };
  
  // Search books in API with a query
  searchQuery = (query) => {
    BooksAPI.search(query).then(searchResults => {
      this.setState({results: searchResults});
    })
  }

  //Save query
  getQuery = (e) => {
    this.setState({search: e.target.value});
    this.searchQuery(this.state.search)
  }

  // conect API to get all books
  /*componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books: books });
      })
  };*/
  // conect API to get all books with async and await
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  render() {
    const {books,results,search} = this.state;

    return (
      <div className="app">

        {/* Show searchBook */}
        <Route
          exact path = "/search"
          render = {() => (
            <SearchBooks
              getQuery = {this.getQuery}
              searchFor = {search}
              searchResults = {results}
              changeShelf = {this.changeShelf}
              books = {books}
            />
          )}
        />
        
        {/* Show Bookshelves */}
        <Route
          exact path = "/"
          render = {() => (
             <Bookshelves 
               books = {books}
               changeShelf = {this.changeShelf}
             />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
