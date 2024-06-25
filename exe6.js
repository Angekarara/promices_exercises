function world(getmessage){
    setTimeout(() => {
        getmessage()
    }, 3000); 
}

function message() {
    console.log('Hello world')
}

world(message)