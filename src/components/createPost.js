import React from 'react';
// import './App.css';
// import FavoriteList from './FavoriteList'
import firebase from '../firebase.js';
var user = firebase.auth().currentUser;
// var name = user.displayName;
// console.log(user);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User logged in already or has just logged in.
    // var name = (user.displayName);

  } else {
    this.state.user.displayName = "";
  }
});

class CreatePost extends React.Component{
    constructor(){
        super();
        this.state = {
            content: "",
            date: "",
            name: ""
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

db.collection("Posts").add({
  name: user.displayName,
  dates: this.state.date,
  contents: this.state.content
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
this.setState({
  name: ""
})
    };

    render() {
      var postContainer = {
        width: "50%",
        height: "100%",
        marginLeft: "25%",
        border: "1px solid black",
        textAlign: "center",
        padding: "1%"
      };

      var pStyle = {
        

      };

      return (
        

          
        <div style={postContainer} className="ToDo">
        <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="header">
        <h1>Create a Post</h1>
        </div>
      <div  style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
      {/* {this.state.user ?
        <div>
          <div className='user-profile'>
            <p style={pStyle}> {user.displayName} </p>
            
          </div>
        </div>
        :
        
      } */}

      
        <h3>{user.displayName}</h3>
     
        {/* <div className='wrapper'>
        <p style={pStyle}>You must log in to see others posts</p>
      </div> */}
  
       
        
      </div>
      <form onSubmit = {this.addUser} style={{display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
          <input style={{height: "40px", width:"40%"}} name = "content" id = "content" type="text"  onChange={this.updateInput} placeholder = "What are you thinking?" value = {this.state.content} />
          <input style={{height: "40px"}}name = "date" id = "date" type="text" onChange={this.updateInput} placeholder = "Today's date" value = {this.state.date} />
        <input  style={{height: "40px"}}type="submit" value="Submit" />
      </form>
      <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className="TotalNumber">
      </div>
      </div>
    );

    }
    

    
    
    
      
        
      }

export default CreatePost;
