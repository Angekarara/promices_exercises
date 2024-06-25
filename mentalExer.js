// steps: 1. first fetch and check
/**
 * first fetch and check if the fecthing is working
 * track the time the fetch should aborted
 * Abort
 */
function getData(url, timeout) {
  const controller = new AbortController();

  const signal = controller.signal;

  setTimeout(() => {
    controller.abort();
    console.log("Is it aborted?", signal);
  }, timeout);

  return fetch(url, { signal })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(`${err}`);
    });
}
getData("https://jsonplaceholder.typicode.com/posts", 10);
