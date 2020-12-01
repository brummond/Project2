import firebase from '../firebase.js'
import DisplayPost from './components/displayPost.js'
import CreatePost from './components/createPost.js'
import LoginPage from './components/LoginPage.js'
import Navbar from './components/Navbar.js'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

db.collection("Posts").doc("wblLiVmuuAKcLTSXSj5G").set({
  contents: "this is a test post",
  dates: "12-1-20",
  names: "John"
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});
function App() {
  return (
    <Router>
     <div>
        <Navbar />

       <Switch>
         <Route path="/posts">
           <DisplayPost />
         </Route>
         <Route path="/create">
           <CreatePost />
         </Route>
         <Route path="/login">
           <LoginPage />
         </Route>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
