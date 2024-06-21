//Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms
function abortion(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => {
    controller.abort();
  }, timeout);
  return fetch(url, { signal })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(`Error: ${err.message}`));
}
abortion("https://jsonplaceholder.typicode.com/posts", 10);
abortion("https://jsonplaceholder.typicode.com/posts", 1000);
