import React from 'react'
import { connect } from 'react-redux'

class BookInput extends React.Component {

    state = {
        name: '',
        author: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
             [event.target.name] : event.target.value
        })
    }

    handleSubmit = () => {
        event.preventDefault()
        this.props.addBook(this.state)
        this.setState({
            title: '',
            author:'',
            description:''
        })
    }

    render(){

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Title:</label>
                    <input type = 'text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>
                    <br/>
                        <label>Book Author:</label>
                        <input type='text' placeholder='Author' valule={this.state.author} name="author" onChange={this.handleChange} />
                        <br/>
                    <label>Description of Book:</label>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>

        )

    }}

    export default connect(null, {addBook}) (BookInput)