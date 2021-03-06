import React, { Component } from 'react';
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';
import { Throttle } from 'react-throttle';

class SearchBooks extends Component {
  
  render(){
    const {getQuery,searchResults,books,changeShelf} = this.props;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Throttle time="400" handler="onChange">
            <input type="text" placeholder="Search by title or author" onChange={getQuery}/>
            </Throttle>
          </div>
        </div>      
        <div className="search-books-results">

          {this.props.searchResults !== undefined && searchResults.length > 0 && (
            <ol className="books-grid">

              {searchResults.map((book) => {

                books.map((bookShelf) => {
                  
                  if(book.id === bookShelf.id){
                    book.shelf = bookShelf.shelf
                  }
                  return true

                }, this)
                
                return (
                  <li key={book.id}>
                    <Book
                      thisBook = {book}
                      title={book.title}
                      author={book.authors}
                      shelf = {book.shelf}
                      changeShelf = {changeShelf}
                    />
                  </li>
                )                   
              }, this)}

            </ol>
          )}
                    
        </div>
      </div>
    )
  }
}

export default SearchBooks