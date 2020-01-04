import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends React.Component {


    render() {
        return (
            <div>
                Add A Review:
                <ReviewInput book={this.props.book} />
                <br/>

                All Reviews
                <Reviews reviews={this.props.book && this.props.book.reviews} />
            </div>
        )
    }
}

export default ReviewsContainer