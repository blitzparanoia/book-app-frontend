import React from 'react'
import BookShow from './BookShow'

const Books = (props) => {

    return(
        <div>
            Books
            {props.books.map(book => <div key={book.id}>
                <BookShow book={book}/>
            </div> )}
        </div>

    )

}

export default Books