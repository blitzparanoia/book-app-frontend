import React from 'react'
import {connect} from 'react-redux'


class ReviewInput extends React.Component {

    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] = event.target.value
        })

    }

    render () {
        return(

            <div>
            <form>
                <label>Comment:</label>
                    <input type='text' placeholder='Comment' value={this.state.comment} name="comment" onChange={this.handleChange} /><br />
            </form>
            </div>
        )
    }
}

export default connect(null )(ReviewInput)