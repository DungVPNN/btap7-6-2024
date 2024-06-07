const sortArrayWithPromise = (array) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject(new Error('Tham số đầu vào phải là một mảng'));
        }
        const newArr = array.slice().sort((a, b) => a - b);
        resolve(newArr);
    });
};

sortArrayWithPromise([1, 8, 2, 5, 9, 5])
    .then(a => {
        console.log(a);
    })
    .catch(error => {
        console.log(error);
    });