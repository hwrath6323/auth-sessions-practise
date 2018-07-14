import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({response: res.express}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello')
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    
    return body;
  }

  getInfo(){
    axios.get('http://localhost:5000/info')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={() => this.getInfo()}>Log in to Twitter</button>
        </p>
      </div>
    );
  }
}

export default App;