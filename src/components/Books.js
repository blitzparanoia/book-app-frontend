import React from 'react'
import { Route, Link } from 'react-router-dom'

import Book from './Book'

const Books = (props) => {

    return(
        <div>
            Books
            {props.books.map(book => 
            <div key={book.id}>
                <Book book={book}/>
            </div> )}
        </div>

    )

}

export default Books