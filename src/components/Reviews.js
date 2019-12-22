import React from 'react'
import ReviewInput from './ReviewInput'
import {connect} from 'react-redux'
import {deleteReview} from '../actions/deleteReview'

const Reviews = (props) => {
    

    const handleDelete = (review) => {
        props.deleteReview(review.id, review.book_id)
    }

    return(
        <div>
            {props.reviews && props.reviews.map(review => 
            <li key={review.id}>{review.comment}
            <button onClick={() =>  handleDelete(review)}>Delete</button>
            </li>
                )}
        </div>
    )
}

export default connect(null, {deleteReview})(Reviews)