import React from 'react';
import firebase from '../firebase.js';

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            about: "",
            song: "",

        };
    }
    componentDidMount()
    {

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.
          // var name = (user.displayName);
          this.setState({
            name: user.displayName
          })

        }
      });
    }
    render() {
        var profileStyles = {
          textAlign: "center"
        };
  
    return(
        <div style={profileStyles}>
        <h3>hello {this.state.name}</h3>
        <h4>About me: </h4>
        <h5>Major:</h5>
        <h5>Minor:</h5>
        <h5>Profile Picture:</h5>
        <img src = "https://via.placeholder.com/150"></img>
        </div>
        

    );

}

}
export default Profile;
// export default Profile;