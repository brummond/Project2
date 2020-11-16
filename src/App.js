import React from 'react';
// import './App.css';
// import FavoriteList from './FavoriteList'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    render() {
        return (
            <div className="ToDo">
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className="header">
            <h1>Create a Post</h1>
            </div>
          <form style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}  onSubmit={this.handleSubmit}>
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Name</h3>
            </div>
              <input  type="text" value={this.state.value} onChange={this.handleChange} placeholder = "What are you thinking?" />
            <input type="submit" value="Submit" />
          </form>
          <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}className="TotalNumber">
          <h3>Total Posts: </h3>
          </div>
          </div>
        );
      }
    }

    export default App;
