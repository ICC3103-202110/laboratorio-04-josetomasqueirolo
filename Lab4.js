const view = counter => `Count: ${counter}

(+) (-)`;

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
 
        const prompt = require('prompt-sync')();
 
        const msg = prompt('What would you do? ');
        counter = update(msg,counter)
    }
}

app(0)