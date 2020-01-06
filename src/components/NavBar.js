import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return(
        <div className="NavBar">
            <Link to="/" style={{ paddingRight: '10px'}}> Main Page </Link>
            <Link to="/books" style={{ paddingRight: '10px' }}>Books</Link>

            <Link to="/books/new">Add Book</Link>



        </div>
    )
}

export default NavBar