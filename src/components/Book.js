import React from 'react'
import {Route, Link} from 'react-router-dom'

const Book = (props) => {

    console.log(props)

    let book = props.books[props.match.params.id - 1]
    console.log(book)

    return (
        <li>
            {book ? book.title : null} - {book ? book.author : null}
        </li>
    )


}

export default Book