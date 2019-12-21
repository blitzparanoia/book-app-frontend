import React from 'react'
import ReviewInput from './ReviewInput'

const Reviews = (props) => {

    const handleDelete = () => {
        
    }

    return(
        <div>
            {props.reviews && props.reviews.map(review => 
            <li key={review.id}>{review.comment} 
            <button onClick={this.handleDelete}> Delete</button>
            </li>
                )}
        </div>
    )
}

export default Reviews