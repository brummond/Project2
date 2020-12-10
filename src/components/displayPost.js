import React from 'react';
import SingelPost from './singlePosts.js'
import firebase from '../firebase.js';

class DisplayPost extends React.Component {
  constructor(){
      super();
      this.state = {
          search: "",
          posts: [],
          filteredPosts: []
      };
      this.seach = this.search.bind(this);
  }

  search = e => {
      /*this.setState({
        [e.target.name]:e.target.value
      });*/
      var temp = [];
      this.state.posts.forEach((post) => {
        if(post.title.match(e.target.value) || post.date.match(e.target.value))
        {
          temp.push(post);
        }
      })
      this.setState({
        filteredPosts: temp
      })


  }

  componentDidMount()
  {
    var i = 1;
    var tempArray = [];
    var db = firebase.firestore();
    db.collection("Posts").get().then((snapshot) =>{
      //console.log(snapshot.docs)
      snapshot.docs.forEach((doc) => {

          tempArray.push({
            ...doc.data(),
            id: doc.id,
            index: i
          })
          i++;

      })
      this.setState({
        posts: tempArray,
        filteredPosts: tempArray
      })
    })

  }
  render() {
    //console.log(this.state.posts)
    var postContainer = {
      width: "50%",
      height: "100%",
      marginLeft: "25%",
      border: "1px solid black",
      textAlign: "center",
      padding: "1%",
      backgroundColor: "#78aafa",
    }
    var search = {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "2px",
      textAlign: "center",
      marginLeft: "2%",
      marginRight: "2%",
      width: "96%"
    }


    return(
        <div style={postContainer}>
          <h3> Posts </h3>
            <form>
              <input type="text" placeholder="Search.." name="search" onChange={this.search} style={search}/>
            </form>
          <SingelPost search={this.state.search} posts={this.state.filteredPosts}/>
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
