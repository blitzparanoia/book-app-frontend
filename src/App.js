import React from 'react';
import { connect } from 'react-redux'
import BooksContainer from './containers/BooksContainer'


class App extends React.Component { 

  render() {
  return (
    <div className="App">
      <BooksContainer/>
    </div>
  );
}
}


export default App;
