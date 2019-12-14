import React from 'react';
import { connect } from 'react-redux'
import { fetchBooks } from  './actions/fetchBooks'
import BooksContainer from './containers/BooksContainer'


class App extends React.Component { 

  componentDidMount() {
    this.props.fetchBooks({type: 'FETCH_BOOKS', payload: {name: 'Book'}})
  }

  render() {
  return (
    <div className="App">
      App
      <BooksContainer/>
    </div>
  );
}
}



export default connect(null, {fetchBooks})(App);
