import React from 'react'

class BookEdit extends React.Component {

    state = {
        title: '',
        author: '',
        description: ''
    }

    render() {
        return (
            <div>
                <form>
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