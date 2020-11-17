import React, { Component } from 'react';
//import '../App.css';
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

    return (
        <div className="wrapper">
          {this.state.user ?
              <button onClick={this.logout}>Log Out</button>
              :
              <button onClick={this.login}>Log In</button>
            }

          {this.state.user ?
            <div>
              <div className='user-profile'>
                <img src={this.state.user.photoURL} />
              </div>
            </div>
            :
            <div className='wrapper'>
              <p>You must log in to see others posts</p>
            </div>
          }
        </div>
      )
  }
}

export default LoginPage;
