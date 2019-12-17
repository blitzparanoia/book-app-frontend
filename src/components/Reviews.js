import React from 'react'
import ReviewInput from './ReviewInput'

const Reviews = (props) => {

    return(
        <div>
            {props.reviews && props.reviews.map(review => 
            <li key={review.id}>{review.comment} 
            </li>
                )}
        </div>
    )
}

export default Reviews