
function processArray(a, callback) {
    setTimeout(() => {
        callback(a);
        a++;
        if (a !== 0) {
            processArray(a, callback);
        }
    }, 1000);
}
let a = 1;
processArray(a, (num) => console.log(num));