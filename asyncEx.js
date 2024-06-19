async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);
  const users = await res.json() 
  console.log(users)
}

fetchUsers()
