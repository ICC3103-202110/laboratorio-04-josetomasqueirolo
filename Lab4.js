const vew = counter => `Counter: ${counter}`;

const update = (msg,counter) => {
    if(msg==="+"){
        return counter+1
    }
    if(msg==="-"){
        return counter-1
    }
    else{
        return counter
    }

}
console.log(vew(3));
console.log(update("s", 5))