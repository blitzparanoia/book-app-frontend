import React from 'react'
import ReviewInput from '../components/ReviewInput'
import Reviews from '../components/Reviews'

class ReviewsContainer extends React.Component {


    render() {
        return (
            <div>
                ReviewsContainer
                <ReviewInput/>
                <Reviews/>
            </div>
        )
    }
}

export default ReviewsContainer