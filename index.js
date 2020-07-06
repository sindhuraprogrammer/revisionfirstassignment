import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'Sindhu'
    };
  }
  
changeUsernameHandler=(event)=>{
  this.setState({
username:event.target.value
})
}

  render() {
    return (
      <div>
      <UserInput change={this.changeUsernameHandler} username={this.state.username}/>
       <UserOutput username={this.state.username}/>
       </div>
    );
  }
}

render(<App />, document.getElementById('root'));
