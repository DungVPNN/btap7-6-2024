const sumWithPromise = (array) => {
    let a=false;
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            a=true;
        }
        for (let i = 0; i < array.length; i++) {
            if (!Number.isInteger(array[i])) {
                a=true;
            }
        }
        if(a){
            reject(new Error('Tham số đầu vào phải là mảng số nguyên'));
        }
        let all=0;
        for (let i = 0; i < array.length; i++) {
            all+=array[i]
        }
        resolve(all);
    });
};

sumWithPromise([1, 2, 3, 4, 5, 6, 7])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});