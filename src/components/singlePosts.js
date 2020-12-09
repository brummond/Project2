import React from 'react';
import firebase from '../firebase.js';

class SinglePost extends React.Component {
  //will hold state of all the posts -- will be linked to firebase
  constructor() {
    super();
    this.state = {
      posts: []
    }
    this.likePost = this.likePost.bind(this);
    };



  likePost = (postid, postTitle) => {
    document.getElementById(postTitle).style.color = "red"
    var db = firebase.firestore();
    db.collection("Posts").doc(postid).get().then((snapshot) => {
      var likeUp = snapshot.data().likes + 1;
      db.collection("Posts").doc(postid).set({likes: likeUp}, { merge: true });
      //console.log(likeUp)
    })


    //db.collection("Posts").doc(postid).set({capital: }, { merge: true });
  }


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
      //border: "1px solid black",
      width: "96%",
      marginLeft: "2%",
      marginTop: "10px",
      marginBottom: "10px",
      backgroundColor: "white",
      padding: "5px",
      borderRadius: "10px"
    }
    var like = {
      backgroundColor: "transparent",
      border: "none",

      color: "grey"
    }

    return(
        <div>
          {this.state.posts.map((post) =>
            <div id={post.id} style={singlePost} key={post.id}>
              <div style={{display: "flex", justifyContent: "flex-end"}}>

                

                <p> {post.likes} Likes</p>

              </div>
              <h4> {post.title}</h4>
              <h5> {post.name} </h5>
              <h6> {post.date} </h6>
              <p> {post.contents} </p>
              <div style={{display: "flex", justifyContent: "flex-end"}}>

                <button id={post.title} onClick={() => this.likePost(post.id, post.title)} style={like}><i className="material-icons">favorite</i></button>
              </div>
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
