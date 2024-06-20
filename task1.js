function createAlarm(name, time){
return new Promise((resolve, reject) => {
    if(time<2){
        reject('delay is not sufficient')
    }
    else{
        setTimeout(() => {
            resolve(`wake up ${name} after ${time} seconds`)
        },time)
    }
})
}
createAlarm('john', 4).then(message => {
    console.log(`${message}`)
}).catch( message => {
    console.log(`${message}`)
})