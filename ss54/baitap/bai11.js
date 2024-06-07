const fibonacci = async (n) => {
    if (n <= 0) {
        throw new Error('Dữ liệu nhập vào không hợp lệ');
    }
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return await all(n - 1) + await all(n - 2);
    }
};

const all = async (n) => {
    let fib1 = 0;
    let fib2 = 1;
    let fib = 0;
    for (let i = 2; i <= n; i++) {
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }
    return fib;
};

fibonacci(10)
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});