import React from 'react';
import firebase from '../firebase.js';

class CreatePost extends React.Component{
    constructor(){
        super();
        this.state = {
            content: "",
            date: "",
            name: "",
            title: ""
        };
    }

    updateInput = e => {
      this.setState({
        [e.target.name]:e.target.value
      });
    }
    addUser = e =>{
      e.preventDefault();
      var db = firebase.firestore();
      var user = firebase.auth().currentUser;
      db.collection("Posts").add({name: user.displayName, date: this.state.date, contents: this.state.content, title: this.state.title}).then(() => {
        console.log("Document successfully written!");
      }).catch((error) => {
        console.error("Error writing document: ", error);
      });

      this.setState({
        name: ""
      })
    };

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
      var postContainer = {
        width: "50%",
        height: "100%",
        marginLeft: "25%",
        border: "1px solid black",
        textAlign: "center",
        padding: "1%"
      };


      return (
        <div style={postContainer} className="ToDo">
          <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="header">
            <h1>Create a Post</h1>
            </div>
            <div  style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
              <h3>Author: {this.state.name}</h3>
            </div>
            <form onSubmit = {this.addUser} style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                <input style={{height: "40px", width:"40%"}} name = "title" id = "title" type="text"  onChange={this.updateInput} placeholder = "Enter Post Title" value = {this.state.title} />
                <input style={{height: "40px", width:"40%"}} name = "content" id = "content" type="text"  onChange={this.updateInput} placeholder = "What are you thinking?" value = {this.state.content} />
                <input style={{height: "40px"}} name = "date" id = "date" type="date" onChange={this.updateInput} value = {this.state.date} />
              <input  style={{height: "40px"}} type="submit" value="Submit" />
            </form>
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className="TotalNumber">
          </div>
        </div>
    );

    }







      }

export default CreatePost;
