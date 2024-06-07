const myFind=(N,a)=>{
    callback(N,a)
}
const callback=(N,a)=>{
    let newArr=[];
    for (let i = 0; i < N.length; i++) {
        if(N[i]===a){
            newArr.push(N[i]);
        } 
    }
    console.log(newArr);
}
const N = [1,6,6,4,5];
myFind(N, 6, callback);