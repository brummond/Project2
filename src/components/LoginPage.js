import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

// lots of help from
// https://css-tricks.com/firebase-react-part-2-user-authentication/

class LoginPage extends Component{
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
  var buttonStyle = {
      textAlign: "center",
      fontSize: "120%",
      width: "20%",
      height: "40px",
      display: "inline-block",
      margin: "10px"
  }

  var pStyle = {
      textDecoration: "none",
      textAlign: "center"
  }

  var postContainer = {
      width: "50%",
      height: "100%",
      marginLeft: "25%",
      border: "1px solid black",
      textAlign: "center",
      padding: "1%"
  }

    return (
        <div style={postContainer} className="wrapper">
          {this.state.user ?
              <button style={buttonStyle} onClick={this.logout}>Log Out</button>
              :
              <button style={buttonStyle} onClick={this.login}>Log In</button>
            }

          {this.state.user ?
            <div>
              <div className='user-profile'>
                <img src={this.state.user.displayName} />
              </div>
            </div>
            :
            <div className='wrapper'>
              <p style={pStyle}>You must log in to see others posts</p>
            </div>
          }
        </div>
      )
  }
}

export default LoginPage;