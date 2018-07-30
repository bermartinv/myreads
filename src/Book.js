import React, { Component } from 'react';
import './App.css'

class Book extends Component {

  render(){   
        const {author,title,shelf,thisBook,changeShelf} = this.props;
    return(
        
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thisBook.imageLinks ? thisBook.imageLinks.thumbnail : 'None image'})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event) => changeShelf(thisBook, event.target.value)}
                defaultValue={shelf || 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author }</div>
        </div>
      
    )  
  
  }

}

export default Book
