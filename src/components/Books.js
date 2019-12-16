import React from 'react'
import BookShow from './BookShow'

const Books = (props) => {

    return(
        <div>
            Books
            {props.books.map(book => <li key={book.id}>
                <BookShow book={book}/>
            </li> )}
        </div>

    )

}

export default Books