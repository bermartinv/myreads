import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';

class Bookshelves extends Component {

  render(){
    const {changeShelf,books} = this.props;

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* Books which Currently Reading shelf */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Show  currently reading books */}
                  {books.map(function(book){
                    if(book.shelf === "currentlyReading"){
                      return <li key={book.id}>
                        {<Book
                          thisBook = {book}
                          id={book.id}
                          shelf = {book.shelf}
                          title={book.title}
                          author={book.authors}
                          changeShelf = {changeShelf}
                        />}
                      </li>;
                    }
                  }, this)}
                </ol>
              </div>
            </div>
            {/* Books which want to read */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Show want to read books */}
                  {books.map(function(book){
                    if(book.shelf === "wantToRead"){
                      return <li key={book.id}>
                        {<Book
                          thisBook = {book}
                          shelf = {book.shelf}
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          changeShelf = {changeShelf}
                        />}
                      </li>;
                    }
                  }, this)}
                </ol>
              </div>
            </div>
            {/* Books which read */}
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* Show read books */}
                  {books.map(function(book){
                    if(book.shelf === "read"){
                      return <li key={book.id}>
                        {<Book
                          thisBook = {book}
                          shelf = {book.shelf}
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          changeShelf = {changeShelf}
                        />}
                      </li>;
                    }
                  }, this)}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Search book</Link>
        </div>
      </div>
    )
    
  }

}
export default Bookshelves