import React, { Component } from 'react';
//import Validation from 'react-validation';
//import '../validation.js';
import './Signup.css'
class Signup extends Component {
  constructor(props){
    super(props)
      this.state = {
        username: '',
        password: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    handleSubmit(event){
      event.preventDefault();
      const data = {
        username: this.state.username,
        password: this.state.password
      }
      console.log(data);
      fetch("/api/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        console.log(data)    
        if(data === "success"){
           this.setState({msg: "Thanks for registering"});  
        }
    }).catch(function(err) {
        console.log(err)
    });
    }
    onChange(e){
      
      this.setState({[e.target.username]: e.target.value });
    }

  render(){
    return (
  <div>
    <div className="row small-up-2 medium-up-3 large-up-4">
      <div className="column">
      <h2>Signup Page</h2>
      <label>Username</label>
      <input type='text' name='username' placeholder='Username' onChange={this.onChange} />
      <label>Password</label>
      <input type='password' name='password' placeholder='Password' onChange={this.onChange} />
      <input type='submit' value='Signup' className='button' onClick={this.handleSubmit} method='POST'/>
    </div>
    </div>
  </div>
    );
  }
}

export default Signup;