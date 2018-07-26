import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookShelves from './components/BookShelves'


class BooksApp extends Component {
    state = {
      books : [],
      query : '',
      showingBooks : []
    }


// getAll with componentDidMount
componentDidMount() {
  BooksAPI.getAll().then((books) => 
  this.setState({ books })
)

}

  render() {
    //const {books} = this.state;
    return (
      <div>
      <p>Hola que tal</p>
      <Route exact path="/"
             render = {() => (
              <BookShelves Book = {this.state.books} />
             )}
      />
      </div>
    )
  }
}

export default BooksApp

