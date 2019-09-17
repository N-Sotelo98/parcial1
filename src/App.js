import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App row">
       <div className ="col-md-3">
      <Menu/>
      <button className="btn btn-primary">Twittear</button>
      </div>
      <div className="col-md-6"> <Tweet/></div>
      <div className="col-md-3">
        <input  className="form-control mt-4" placeholder="Buscar en un twitter"></input>

      </div>
    </div>
  );
}

export default App;
