import React from 'react'


class BookInput extends React.Component {

    render(){

        return (
            <div>
                <form>
                    <label>Book Title:</label>
                    <input type = 'text' placeholder='Title'/>
                </form>
            </div>

        )

    }}

    export default BookInput