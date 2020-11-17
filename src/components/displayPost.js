import React from 'react';
import SingelPost from './singlePosts.js'
import SearchPost from './searchPosts.js'
class DisplayPost extends React.Component {


  render() {

    var postContainer = {
      width: "50%",
      height: "100%",
      marginLeft: "25%",
      border: "1px solid black",
      textAlign: "center",
      padding: "1%"
    }


    return(
        <div style={postContainer}>
          <h1> Post Container </h1>
          <SearchPost />
          <SingelPost />
        </div>
      )
  }
}
//Component Higharchy
/*
Post Container -- Holds all of the single page post
  - Search Bar
  - Single Posts'

//Minimum state
  Search text - state needs to be stored in the parent(DisplayPost) to be passed into single post to modify the firebase query
  Posts Array - will be stored in the single post component and will update as the posts are searched and modifyed and added

*/
export default DisplayPost;
