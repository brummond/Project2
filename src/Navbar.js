import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './App.css';
import firebase, { auth, provider } from './firebase.js';

// lots of help from
// https://css-tricks.com/firebase-react-part-2-user-authentication/

class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);

    };

login(){
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}

logout(){
  auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

componentDidMount(){
  auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    }
  });
}


render(){
    return (
        <div className="nav">
          <header>
            <h1>Name of App</h1>
            <h2>Make a post</h2>
            <h2>View posts</h2>
               </header>
          
        </div>
      )
  }
}

export default Navbar;
