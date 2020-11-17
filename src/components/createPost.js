import React from 'react';
// import './App.css';
// import FavoriteList from './FavoriteList'

class CreatePost extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    render() {

      var postContainer = {
        width: "50%",
        height: "100%",
        marginLeft: "25%",
        border: "1px solid black",
        textAlign: "center",
        padding: "1%"
      }
        return (
            <div style={postContainer} className="ToDo">
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="header">
            <h1>Create a Post</h1>
            </div>
          <div  style={{display: 'inline-block', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Name: </h3>
          </div>
          <form style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}  onSubmit={this.handleSubmit}>
              <input style={{height: "40px", width:"40%"}} type="text" value={this.state.value} onChange={this.handleChange} placeholder = "What are you thinking?" />
            <input style={{height: "45px"}} type="submit" value="Submit" />
          </form>
          <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className="TotalNumber">
          <h3>Total Posts: </h3>
          </div>
          </div>
        );
      }
    }

export default CreatePost;
