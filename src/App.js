import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      counter: 0
    }
  }
  render(){
     return (
    <div className="App">
        <h1 data-test="component-app-increment"> {this.state.counter < 0 ? 'counter must be positive ' : `counter is ${this.state.counter}`}</h1>
        <button data-test="component-app-button-dec" onClick={()=>
        this.setState({counter : this.state.counter - 1})}>Decrement Counter</button>
        <button data-test="component-app-button" onClick={()=> this.setState({counter: this.state.counter + 1})}>Increment Button</button>
    </div>
  );
  } 
}

export default App;
