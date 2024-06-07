const isPrimeWithPromise= async(num)=>{
    try {
        if (num < 2) {
            throw new Error('k p số ngto')
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                throw new Error('k p số ngto')
            }
        }
        return 'là số ngto';
    } catch(error){
        throw error;
    }
}

isPrimeWithPromise(1)
.then((a)=>{
    console.log(a);
})
.catch((error)=>{
    console.log(error);
})