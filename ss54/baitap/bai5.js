const isPrimeWithPromise=(num)=>{
    return new Promise((a,b)=>{
        if (num < 2) {
            b(new Error('k p số ngto'))
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                b(new Error('k p số ngto'))
            }
        }
        a('là số ngto')
    })
}

isPrimeWithPromise(1)
.then((a)=>{
    console.log(a);
})
.catch((error)=>{
    console.log(error);
})