import React from 'react';
import firebase from '../firebase.js';

class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            about: "",
            major: "",
            minor: "",
            userID: "",
            show: false
          };
          this.updateProfile = this.updateProfile.bind(this);
    }
    updateProfile = (e) => {
      e.preventDefault();
      //console.log(this.state.userID)
      var db = firebase.firestore();
      db.collection("Profiles").doc(this.state.userID).set({name: this.state.name, about: this.state.about, major: this.state.major, minor: this.state.minor}).then(() => {
        console.log("wrote")
        window.location.reload();
      })

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
            name: user.displayName,
            userID: user.uid
          })

          //renders the actual profile info if its there and add profile info if its not there
          var db = firebase.firestore();
          db.collection("Profiles").doc(user.uid).get().then((snapshot) =>{
            if(snapshot.exists == false)
            {
              this.setState({show: false})
            }
            else
            {
              this.setState({show: true})
              db.collection("Profiles").doc(this.state.userID).get().then((snapshot) => {
                //console.log(snapshot.data())
                this.setState({about: snapshot.data().about, major: snapshot.data().major, minor: snapshot.data().minor})
              })

            }
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
          {this.state.show
        ? <div>
            <h3>My Profile</h3>
            <h5>Name: {this.state.name}</h5>
            <h5>About me: {this.state.about} </h5>
            <h5>Major: {this.state.major} </h5>
            <h5>Minor: {this.state.minor} </h5>
          </div>

        :
        <div>
          <h5>Edit Profile</h5>
          <form>
          {/* <input style={input} name="title" id="title" type="text"  onChange={this.updateInput} placeholder="Enter Post Title" value={this.state.title} /> */}
            <input style = {input} name = "about" type = "text" onChange={this.updateInput} value = {this.state.about} placeholder = "About Me"/>
            <input style = {input} name = "major" onChange={this.updateInput} value={this.state.major} placeholder = "Major"/>
            <input style = {input} name = "minor" onChange={this.updateInput} value = {this.state.minor} placeholder = "Minor"/>
            <button  style={input} onClick={(e) => this.updateProfile(e)}>Add Profile</button>
          </form>
        </div>
      }
        </div>



    );

}

}
export default Profile;
// export default Profile;
