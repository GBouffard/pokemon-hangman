import React, { Component } from "react";
import AlphabetButtons from './components/molecules/alphabet-buttons';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlphabetButtons />
      </div>
    );
  }
}

export default App;
