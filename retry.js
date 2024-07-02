function fetchDataWithRetry(url, mRetries) {
  let retries = 0;
  return new Promise((resolve, reject) => {
    function fetchData() {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("retry the fetch");
          }
          return res.json();
        })
        .then((data) => resolve(data))
        .catch((error) => {
          if (retries <= mRetries) {
            retries++
            console.log(`${error.message}`);
            fetchData();
          } else {
            reject(new Error('failed to fetch'));
          }
        });
    fetchData();
     }
  });
}
fetchDataWithRetry("https://jsonplaceholder.typicode.com/post", 4)
  .then((data) => console.log( data))
  .catch((error) => console.error(`${error.message}`));
