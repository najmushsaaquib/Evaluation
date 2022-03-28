function sidebar() {
  // return your html component here
  //Make sure to give input search box id as "searchbar"
  return `   <h1>Blog Search</h1>
  <h3>Login</h3>
  <input type="text" id="searchbar" placeholder="Search...">
  <p>Startup</p>
  <p>Blogletter</p>
  <p>Audio</p>
  <p>Video</p>
`;
}

// let url = ` https://blog-search-u3c4.herokuapp.com/api/search/?q=[search_term]`

// let sycourl = `https://blog-search-u3c4.herokuapp.com/api/blogs/psychology`

export default sidebar;
