import React from 'react'
import {Redirect} from 'react-router-dom'

const Book = (props) => {

    console.log(props)

    let book = props.books[props.match.params.id - 1]
    console.log(book)

    return (
        <h3>
            {book ? book.title : null} - {book ? book.author : null}
        </h3>
    )


}

export default Book