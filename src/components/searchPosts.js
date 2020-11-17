import React from 'react';
class SearchPost extends React.Component {

  render() {
    return(
        <div>
          <form>
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">Search Posts</button>
          </form>
        </div>
      )
  }
}

export default SearchPost;
