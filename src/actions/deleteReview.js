export const deleteReview = (reviewId, bookId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews/${reviewId}`, {
            method: 'DELETE'
        })
            .then(resp => resp.json())
            .then(book => dispatch({ type: 'DELETE_REVIEW', payload: book}))

        
    }
} 