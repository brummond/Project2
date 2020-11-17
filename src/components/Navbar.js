import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    var linkStyles = {
      textDecoration: "none",
      color: "black",
      fontSize: "150%",
      marginLeft: "10%",
      marginRight: "10%",
    }

    var navBox = {
      border: "1px solid black",
      shadow: "5px solid black",
      padding: "2%",
      textAlign: "center",
      margin: "2%",
      backgroundColor: "#78aafa",
    }

    return (
        <div className="nav" style={navBox}>
          <Link to="/posts" style={linkStyles}>Posts</Link>
          <Link to="/create" style={linkStyles}>Create Posts</Link>
          <Link to="/login" style={linkStyles}> Login</Link>

        </div>
      )
  }
}

export default Navbar;
