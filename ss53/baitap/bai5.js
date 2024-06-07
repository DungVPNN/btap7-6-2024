const checkCondition=(x,y)=>{
    y(x);
}
const display=(a)=>{
    setTimeout(()=>console.log(a),1000);
}
checkCondition(false, display);