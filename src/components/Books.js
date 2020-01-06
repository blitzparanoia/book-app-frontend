import React from 'react'
import {Route, Link } from 'react-router-dom'
import Book from './Book'

const Books = (props) => {

    return (
        <div className='Books'>
            <h2>Books List</h2>
            {props.books.map(book =>
                <li key={book.id}>
                    <Link to={`/books/${book.id}`} >{book.title}</Link>
                </li>)}
        </div>

    )

}

export default Books