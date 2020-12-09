import React from 'react';
import firebase from '../firebase.js';

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            about: "",
            major: "",
            minor: ""

        };
    }
    updateInput = e => {
      this.setState({
        [e.target.name]:e.target.value
      });
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
        var input = {
          height: "40px",
          width:"60%",
          textAlign: "center",
          backgroundColor: "white"
        }
  
    return(
        <div style={profileStyles}>
        <h3>hello {this.state.name}</h3>
        <h4>About me: {this.state.about} </h4>
        <h5>Major: {this.state.major} </h5>
        <h5>Minor: {this.state.minor} </h5>
        <h5>Profile Picture:</h5>
        <img src = "https://via.placeholder.com/150"></img>
        <h5>Edit Profile</h5>
        <form>
        {/* <input style={input} name="title" id="title" type="text"  onChange={this.updateInput} placeholder="Enter Post Title" value={this.state.title} /> */}
          <input style = {input} name = "about" type = "text" onChange={this.updateInput} value = {this.state.about} placeholder = "About Me"/>
          <input style = {input} name = "major" onChange={this.updateInput} value={this.state.major} placeholder = "Major"/>
          <input style = {input} name = "minor" onChange={this.updateInput} value = {this.state.minor} placeholder = "Minor"/>
        </form>
        </div>
        

    );

}

}
export default Profile;
// export default Profile;