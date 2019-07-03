import React,{Component} from 'react';
import './App.css';
import data from "./Data";
import Move from "./Components/Move";
import Card from "./Components/Card";

class App extends Component{
  constructor(){
    super();
    this.state ={
                  cardSet: data,
                  counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
    increment(){
      if(this.state.counter < this.state.cardSet.length-1){
      this.setState({counter: this.state.counter+1});
      }
    }
  
    decrement(){
      if(this.state.counter > 0){
      this.setState({counter: this.state.counter-1});
      }
    }
    
  render (){
    return (
      <div className="App">
          <nav className="navbar">Home</nav>
          <Card arrayC={this.state.cardSet} index={this.state.counter}/>
          <Move increment={this.increment} decrement={this.decrement}/>
      </div>
      );
    }
}

export default App;









