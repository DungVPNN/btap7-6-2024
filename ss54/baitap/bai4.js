const sumWithAsyncAwait = async (array) => {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Tham số đầu vào phải là một mảng');
        }
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== 'number' || !Number.isInteger(array[i])) {
                throw new Error('Mảng phải chứa các số nguyên');
            }
            sum += array[i];
        }
        return sum;
    } catch (error) {
        throw error;
    }
};

sumWithAsyncAwait([1, 2, 3, 4, 5, 6, 7])
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log('Đã xảy ra lỗi:', error.message);
});