import React from 'react'
import {Redirect} from 'react-router-dom'

import ReviewsContainer from '../containers/ReviewsContainer'

const Book = (props) => {

    // let book = props.books[props.match.params.id - 1]

      let book = props.books.filter(book => book.id == props.match.params.id)[0]

    return (
        <div>
        <h3>
            {book ? book.title : null} - {book ? book.author : null}
        </h3>
        <ReviewsContainer book={book}/>
        </div>
    )


}

export default Book