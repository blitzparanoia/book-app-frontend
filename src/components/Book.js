import React from 'react'
import {Redirect} from 'react-router-dom'
import BookEdit from './BookEdit'
import ReviewsContainer from '../containers/ReviewsContainer'

const Book = (props) => {

    // let book = props.books[props.match.params.id - 1]

      let book = props.books.filter(book => book.id == props.match.params.id)[0]

    return (
        <div>
        <h3>
            Title: {book ? book.title : null}
            <br/>
            Author: {book ? book.author : null}
            <br/>
             Description: {book ? book.description : null}
        </h3>
        
               <BookEdit book={book}/>
        
        <br/>
        <ReviewsContainer book={book}/>
        </div>
    )


}

export default Book