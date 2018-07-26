import React, { Component } from 'react'
import '../App.css'

class Book extends Component {
    state = {
        shelf : 'none'
    }
   
    componentDidMount() {
        //const { book } = this.props;
        /*if(this.props.book.shelf) {
          this.setState({ shelf: this.props.book.shelf })
        }*/
    }
    



    render() {
        
        console.log(this.props.books);
        /* We can short sentences as those
            const {authors,titles,imageLinks} = this.props;
            const {thumbnail} = imageLinks;
            const {shelf} = this.state;
        Until I don't Know handly React well I will do it like that
        */
      
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ { width: 128, height: 193,
                         backgroundImage: `url(${this.props.books.imageLinks.thumbnail})`,

                         backgroundSize: 'cover'  } }>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            /*value={ this.state.shelf }
                            onChange={ (event) => this.changeBookShelf(event.target.value) }*/
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Finished Reading</option>
                            <option value="none">Remove Book</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.title }</div>
                <div className="book-authors">{ this.props.authors }</div>
            </div>
        );
    }
}

export default Book