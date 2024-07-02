const performFastAsync = async (apiUrl, duration) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let clearTime;
    const promise = new Promise((resolve, _) => {
      clearTime = setTimeout(() => {
        controller.abort();
        resolve([]);
      }, duration);
    });
  
    const response = await Promise.race([
      fetch(apiUrl, { signal }).then((data) => {
        clearTimeout(clearTime);
        return data.json();
      }),
      promise,
    ]);
    return response;
  };
  
  performFastAsync(
    "https://jsonplaceholder.typicode.com/todos/1",
    10
  ).then((data) => {
    console.log(data);
  });