/**
 * first try to fetch
 * if fetch fail retry specified number of times
 */
// function fetchRetry(url){
//     return fetch(url).then(res => res.json()).then( data => console.log(data))
// }
async function retry(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Cannot fetch the data");

    const data = await response.json();
    return data;
    
  } catch (error) {
    const interval = 1000;
    let times = 1;
    const intervalID = setInterval(() => {
      console.log(`${error}  try again`);
      times++;
      if (interval * times === 5000) {
        clearInterval(intervalID);
      }
    }, interval);

    console.log(`${error}`);
  }
}
retry("https://jsonplaceholder.typicode.com/post");
