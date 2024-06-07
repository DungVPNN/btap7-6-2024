const myFind = (N, a, b) => {
    return b(N, a); 
}
const callback = (N, a) => {
    for (let i = 0; i < N.length; i++) {
        if (N[i] === a) {
            return i;
        }
    }
    return -1;
}
const N = [1, 2, 3, 4, 5];
console.log(myFind(N, 6, callback));