import React, { Component } from 'react';
import {auth} from '../firebase.js';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { findByLabelText } from '@testing-library/react';



// lots of help from
// https://css-tricks.com/firebase-react-part-2-user-authentication/

class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      links: [{route: "/posts", name: "Posts"}, {route: "/create", name: "Create Posts"},{route: "/login", name: "Login"}, {route: "/profile", name:"Profile"}]
    }

    };


componentDidMount(){
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User Singed In")
      this.setState({
        links: [{route: "/posts", name: "Posts"}, {route: "/create", name: "Create Posts"},{route: "/login", name: "Login"}, {route: "/profile", name:"Profile"}]
      });
    }
    else{
      console.log("User Not Singed In")
      this.setState({
        links: [{route: "/posts", name: "Posts"},{route: "/login", name: "Login"}]
      });
    }
  });
}


render(){
    var linkStyles = {
      textDecoration: "none",
      color: "black",
      fontSize: "150%",
      // marginLeft: "10%",
      // marginRight: "10%",
    }

    var navBox = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      border: "1px solid black",
      shadow: "3px solid black",
      padding: "2%",
      textAlign: "center",
      marginBottom: "2%",
      backgroundColor: "#78aafa",
    }
    const routes = this.state.links.map((link) =>
        <Link to={link.route} style={linkStyles} key={link.route}> {link.name} </Link>
    );

    return (
        <div className="nav" style={navBox}>
          {routes}
        </div>
      )
  }
}

export default Navbar;
