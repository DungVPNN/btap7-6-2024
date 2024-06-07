function calculate(a,b,c) {
    return c(a,b);
}
console.log(calculate(2,3,(x,y)=>x+y));