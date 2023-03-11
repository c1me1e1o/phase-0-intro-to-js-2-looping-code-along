const writeCards = (name, event) => {
    const messages = []
    for(let i = 0; i < name.length;i++) {
        
           const greetingMessage = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }
    return messages
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))


function countDown() {
    countDown = 10
    while (countDown > -1) {
    console.log(countDown--);
   }
}
