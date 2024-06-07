const divideNumbers=(a,b)=>{
    if(b==0){
        throw new Error('không thể chia cho 0');
    }
    return a/b
}

try {
    console.log(divideNumbers(10, 1));
} catch (error) {
    console.log(error);
} finally{
    console.log('Kết thúc hàm divideNumbers');
}