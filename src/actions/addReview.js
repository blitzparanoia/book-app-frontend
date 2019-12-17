export const addReview = (review, bookId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/books/${bookId}/reviews`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(review)
        })
            .then(resp => resp.json())
            .then(book => dispatch({ type: 'ADD_REVIEW', payload: book }))
    }
}