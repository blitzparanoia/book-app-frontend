import React from 'react'

class BookEdit extends React.Component {

    state = {
        title: '',
        author: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let book = {...this.state, id: this.props.book.id}
        this.props.editBook(book)
        this.setState({
            title: '',
            author: '',
            description: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Title: </label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange} /><br />
                    <label>Book Author: </label>
                    <input type='text' placeholder='Author' value={this.state.author} name="author" onChange={this.handleChange} /><br />
                    <label>Book Description: </label>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange} /><br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}