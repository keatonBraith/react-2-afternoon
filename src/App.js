import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import data from './data';
import Header from './components/Header';
import User from './components/User'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data,
      index: 0
    }
  }

  handleIndexPrev = () => {
    
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
   })
    }
    
  }

  handleIndexNext = () => {
    if (this.state.index < this.state.data.length -1) {
      this.setState({ index: this.state.index + 1})
    }
  }

  render(){
    return (
      <div className="App">
        <Header className="Header"/>
        <User className="User" userInfo={this.state.data} index={this.state.index}singleUser={this.state.data[this.state.index]}/>
        <Nav className="Nav" next={this.handleIndexNext} prev={this.handleIndexPrev} />
      </div>
    );
  }
}

export default App;
