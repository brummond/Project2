import React from 'react';
class SinglePost extends React.Component {

  //will hold state of all the posts -- will be linked to firebase



  render() {
    var postTest = [{title: "Post 1", date: "October 17th", author: "Leo Huettel", id: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{title: "Post 2", date: "October 18th", author: "Leo Huettel", id: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];

    var singlePost = {
      border: "1px solid black",
      width: "96%",
      padding: "2%",
      marginTop: "5px",
      marginBottom: "5px",
    }

    return(
        <div>
          {postTest.map((post) =>
            <div id={post.id} style={singlePost}>
              <h3> {post.title} </h3>
              <h5> {post.author} </h5>
              <h6> {post.date} </h6>
              <p> {post.description} </p>
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
