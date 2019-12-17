import React from 'react'
import {connect} from 'react-redux'
import {addReview} from '../actions/addReview'


class ReviewInput extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addReview(this.state, this.props.book.id)
        this.setState({
            comment: ''
        })
    }


    render () {
        return(

            <div>
            <form onSubmit={this.handleSubmit}>
                <label>Comment:</label>
                    <input type='text' placeholder='Comment' value={this.state.comment} name="comment" onChange={this.handleChange} /><br />
                <input type='submit'/>
            </form>
            </div>
        )
    }
}

export default connect(null, {addReview} )(ReviewInput)