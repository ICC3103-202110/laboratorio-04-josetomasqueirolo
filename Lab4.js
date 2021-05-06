const view = counter => `Count: ${counter}

(+) (-)

(q) for quit`;

const update = (msg,counter) => {
    if(msg==="+"){
        return counter+1;
    }
    if(msg==="-"){
        return counter-1;
    }
    else{
        return counter;
    }

}

const app = counter => {
    while(true){
        console.clear()
        const currentView = view(counter)
        console.log(currentView)
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          })
          
          readline.question(`What would you do? `, msg => {
            /*counter = update(msg, counter)
            */
            console.log(msg)
            readline.close()
          })

    }
}

