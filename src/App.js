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
