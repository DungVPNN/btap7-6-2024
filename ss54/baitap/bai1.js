const calculateBMI = (weight, height) => {
    if (weight <= 0 || height <= 0) {
        throw new Error('Cân nặng hoặc chiều cao không hợp lệ');
    }
    if (typeof weight !== 'number' || typeof height !== 'number') {
        throw new Error('Kiểu dữ liệu không chính xác');
    }
    if (Number.isNaN(weight) || Number.isNaN(height)) {
        throw new Error('Kiểu dữ liệu không được là NaN');
    }
    return weight / (height ** 2);
};

try {
    const result = calculateBMI(70, 1.75);
    console.log(result);
} catch (error) {
    console.log(error);
}
