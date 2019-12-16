import React from 'react'

const BookShow = (props) => {

    return(
        <li>
           {props.book.title} - {props.book.author}
        </li>
    )
}

export default BookShow