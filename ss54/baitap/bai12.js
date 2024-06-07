const generatenewN = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1 || !Number.isInteger(n)) {
            reject(new Error('Dữ liệu nhập vào không hợp lệ'));
        }
        const newN = [];
        for (let i = 2; i <= n; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                newN.push(i);
            }
        }
        resolve(newN);
    });
};

const main = async () => {
    try {
        const a = await generatenewN(20);
        console.log('Danh sách các số nguyên tố:', a);
    } catch (error) {
        console.log(error);
    }
};
main();