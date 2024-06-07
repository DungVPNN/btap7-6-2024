const findElement = (x, y) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < x.length; i++) {
            if (x[i] === y) {
                resolve({ element: y, index: i }); 
                return; 
            }
        }
        reject(y); 
    });
};

findElement([1, 2, 6, 4, 5], 6)
.then(({ element, index }) => {
    console.log('Phần tử', element, 'được tìm thấy ở vị trí thứ', index);
})
.catch((error) => {
    console.log('Không tìm thấy phần tử', error);
});