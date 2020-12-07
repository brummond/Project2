import React from 'react';
import firebase from '../firebase.js';

class SinglePost extends React.Component {
  //will hold state of all the posts -- will be linked to firebase
  constructor() {
    super();
    this.state = {
      posts: []
    }
    };
  componentDidMount()
  {
    var tempArray = [];
    var db = firebase.firestore();
    db.collection("Posts").get().then((snapshot) =>{
      //console.log(snapshot.docs)
      snapshot.docs.forEach((doc) => {
        tempArray.push({
          ...doc.data(),
          id: doc.id
        })

      })
      this.setState({
        posts: tempArray
      })
    })

  }
  componentDidUpdate = () =>
  {
    var tempArray = [];
    var db = firebase.firestore();
    db.collection("Posts").get().then((snapshot) =>{
      //console.log(snapshot.docs)
      snapshot.docs.forEach((doc) => {
        if(doc.data().title.match(this.props.search) || doc.data().date.match(this.props.search))
        {
          tempArray.push({
            ...doc.data(),
            id: doc.id
          })
        }
      })
      this.setState({
        posts: tempArray
      })
    })

  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  render() {

    var singlePost = {
      border: "1px solid black",
      width: "96%",
      padding: "2%",
      marginTop: "5px",
      marginBottom: "5px",
    }

    return(
        <div>
          {this.state.posts.map((post) =>
            <div id={post.id} style={singlePost} key={post.id}>
              <h3> {post.title}</h3>
              <h5> {post.name} </h5>
              <h6> {post.date} </h6>
              <p> {post.contents} </p>
            </div>
          )}
        </div>
      )
  }
}
//Componet Higharchy
/*
Post Container -- Holds all of the single page post
  - Search Bar
  - Single Posts
*/
export default SinglePost;
