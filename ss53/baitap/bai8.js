const myFind=(N,a)=>{
    callback(N,a)
}
const callback=(N,a)=>{
    let b=1;
    for (let i = 0; i < N.length; i++) {
        if(N[i]===a){
            console.log(N[i]);
            b=0
            return
        } else{
            b=1
        }
    }
    if(b=1){
        console.log('Null');
    }
}

const N = [1,6,6,4,5];
myFind(N, 6, callback);