import React from 'react';
import { connect } from 'react-redux'
import BooksContainer from './containers/BooksContainer'
import NavBar  from './components/NavBar';



class App extends React.Component { 

  render() {
  return (
    <div className="App">
      <NavBar />

      <BooksContainer/>

    </div>
  );
}
}


export default App;
