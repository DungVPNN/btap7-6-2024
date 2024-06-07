const myForEach = (numbers, callback)=>{
    callback(numbers);
}
const callback=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        console.log(`vị trí ${i}, phần tử ${arr[i]}, mảng ${arr}`);        
    }
}
const numbers=[1,2,3,4,5,6];
myForEach(numbers, callback);