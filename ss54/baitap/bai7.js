const myFirstPromise=()=>{
    return new Promise((a,b)=>{
        setTimeout(()=>{
            console.log('Success!');
            a();
        },1000);
    })
}

myFirstPromise()
.then(()=>{
    console.log("Result! Success!");
})