import React from 'react';
import firebase from '../firebase.js';

class SinglePost extends React.Component {
  //will hold state of all the posts -- will be linked to firebase
  constructor() {
    super();
    this.likePost = this.likePost.bind(this);
    };



  likePost = (postIndex, postid, postTitle) => {
    console.log(postIndex)
    document.getElementById(postTitle).style.color = "red"
    var db = firebase.firestore();
    db.collection("Posts").doc(postid).get().then((snapshot) => {
      var likeUp = snapshot.data().likes + 1;
      db.collection("Posts").doc(postid).set({likes: likeUp}, { merge: true });
      document.getElementById(postIndex).innerHTML = likeUp + " Likes";
      //console.log(likeUp)
    })


    //db.collection("Posts").doc(postid).set({capital: }, { merge: true });
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
          {this.props.posts.map((post) =>
            <div id={post.id} style={singlePost} key={post.id}>
              <div style={{display: "flex", justifyContent: "flex-end"}}>



              <p id={post.index}> {post.likes} Likes</p>

              </div>
              <h4> {post.title}</h4>
              <h5> {post.name} </h5>
              <h6> {post.date} </h6>
              <p> {post.contents} </p>
              <div style={{display: "flex", justifyContent: "flex-end"}}>

                <button id={post.title} onClick={() => this.likePost(post.index, post.id, post.title)} style={like}><i className="material-icons">favorite</i></button>
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
