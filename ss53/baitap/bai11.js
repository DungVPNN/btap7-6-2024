function myMap(a,b){
    let result=[];
    for(const value of a){
        result.push(b(value));
    }
    return result
}
const numbers= [1, 2, 3, 4, 5, 6];
myMap(numbers,(item)=>item*2);