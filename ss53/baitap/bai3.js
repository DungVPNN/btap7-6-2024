function processArray(array, callback) {
    array.forEach((item, index) => {
        setTimeout(() => {
            callback(item);
        }, index * 1000); 
    });
}
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, (num) => {
    console.log(num);
});