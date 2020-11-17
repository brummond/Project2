import DisplayPost from './components/displayPost.js'
import CreatePost from './components/createPost.js'
import LoginPage from './components/LoginPage.js'

function App() {
  return (
    <div className="App">
      <LoginPage />
      <DisplayPost />
      <CreatePost />
    </div>
  );
}

export default App;
