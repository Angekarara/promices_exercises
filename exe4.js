// Fetch the posts using the fetch function
function getPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}
getPost()
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(` ${err} has occured `));

