import React from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends React.Component {


    render() {
        return (
            <div>
                <ReviewInput/>
                <Reviews reviews= {this.props.book && this.props.book.reviews}/>
            </div>
        )
    }
}

export default ReviewsContainer