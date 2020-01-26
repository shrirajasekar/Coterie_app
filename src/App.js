import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>{welcome}</div>
          <div>{elem}</div>
          <div>{dataFromDB}</div>
      </header>
    </div>
  );
}

const Shri = {
  firstName:"Shri Rajasekar",
  lastName:"Ravi",
  alias:"Housefly"
}

function formatName(obj) {
  return obj.firstName + ' ' + obj.lastName + ' alias ' + obj.alias
}

const elem = (
  <h1> Hello, {formatName(Shri)} ! </h1>
);

const welcome = (
  <h1> Welcome to Coterie </h1>
);

const dataFromDB = (
  <a href = "http://localhost:8080/login"> Get Sample Data from Mongo DB </a>
);

export default App;


