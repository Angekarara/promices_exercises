function timing(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world')
        }, 2000);
    })
  }
  timing().then(world => console.log(`${world}`))