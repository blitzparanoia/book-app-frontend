import React from 'react'
import {Link} from 'react-router-dom'

const NavLinks = (props) => {
    return(
        <div className="NavLinks">
            <Link to="/books" style={{ paddingRight: '10px' }}>Books</Link>

            <Link to="/books/new">Add Book</Link>

        </div>
    )
}

export default NavLinks